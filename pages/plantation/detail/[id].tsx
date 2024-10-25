import { Header } from '@/components/header'
import { useRouter } from 'next/router'
import { Loading } from '@/components/Loading'
import { Breadcrumb } from '@/components/breadcrumb/style'
import { FormatNumber } from '@/modules/utils/formatNumber'
import { FormatDate } from '@/modules/utils/formatDate'
import useSWR from 'swr'

export default function DetailPlantation() {
    const router = useRouter()

    type dataTypeDetail = {
        id_pesan_tanam: number,
        nama_pemesan: string,
        lokasi_penanaman: string,
        koordinat_penanaman: string,
        waktu_penanaman: string,
        jumlah_tanam: number,
        nilai_pembayaran: number
    }

    type dataTypeTimeline = {
        id_timeline_pesan_tanam: number,
        id_pesan_tanam: number,
        foto_timeline_pesan_tanam: string,
        tgl_timeline_pesan_tanam: string,
        keterangan_timeline_pesan_tanam: string
    }

    const id = router.query.id
    const host:string = `${process.env.NEXT_PUBLIC_SERVER_HOST}`

    const urls:string[] = [
        `${host}/pesan_tanams/${id}`,
        `${host}/timelines/${id}`
    ]
    async function arrayFetcher(urlArr:string[]) {
        const fetcher = async (url:string) => await fetch(url).then((res) => res.json())
        return await Promise.all(urlArr.map(fetcher))
    }
    const { data, error, isLoading }:any = useSWR(urls, arrayFetcher)

    if(isLoading) return <Loading />

    const dataDetail:dataTypeDetail = data[0]
    const dataTimeline:dataTypeTimeline = data[1]

    const breadcrumbLinks = [
        {
            name : 'Home',
            url : '/home'
        },{
            name : 'Plantation',
            url : '/plantation'
        }, {
            name : dataDetail.nama_pemesan,
            url : '/plantation/detail/' + router.query.id
        }
    ]
    
    return (
        <>
            <Header isHomePage={false} />
            <Breadcrumb
                title = "Detail Plantation"
                links = {breadcrumbLinks}
            />
            <main className="main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 plantation-detail mb-5 mb-lg-0">
                            <div className="plantation-detail--inner">
                                <h1 className="plantation-detail--title">{dataDetail.nama_pemesan}</h1>
                                <ul className="plantation-detail--meta">
                                    <li><strong>Jumlah Bibit :</strong> {FormatNumber(dataDetail.jumlah_tanam)}</li>
                                    <li><strong>Waktu Penanaman: </strong> {dataDetail.waktu_penanaman}</li>
                                    <li><strong>Alamat Penamaman :</strong> Kecamatan Sungai Pinyuh, Kabupaten Mempawah</li>
                                </ul>
                                <div className="map-google">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31918.529806852664!2d109.36383093005371!3d-0.058708350541439414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1693154364266!5m2!1sen!2sid" width="100%" height="500" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <h3 className="mb-4">Progress Penamaman Bibit</h3>
                            <ul className="timeline-progress">
                                {
                                    dataTimeline.map((item:dataTypeTimeline, index:number) => {
                                        return (
                                            <li key={index}>
                                                <span className="label label__main progress--date">{FormatDate(item.tgl_timeline_pesan_tanam)}</span>
                                                <img src={item.foto_timeline_pesan_tanam} alt="" />
                                                <p>{item.keterangan_timeline_pesan_tanam}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}