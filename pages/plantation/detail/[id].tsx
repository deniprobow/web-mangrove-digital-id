import { Header } from '@/components/header'
import { useRouter } from 'next/router'
import { Loading } from '@/components/Loading'
import { Breadcrumb } from '@/components/breadcrumb/style'
import useSWR from 'swr'

export default function DetailPlantation() {
    const router = useRouter()

    function conversion(val:number) {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    type dataTypeDetail = {
        id_pesan_tanam: string,
        nama_pemesan: string,
        lokasi_penanaman: string,
        koordinat_penanaman: string,
        waktu_penanaman: string,
        jumlah_tanam: number,
        nilai_pembayaran: number
    }

    type dataType = {
        id : number,
        date : string,
        image : string,
        caption : string
    }

    const urls:string[] = [
        `${process.env.NEXT_PUBLIC_SERVER_HOST}/pesan_tanams/${router.query.id}`
    ]
    async function arrayFetcher(urlArr:string[]) {
        const fetcher = async (url:string) => await fetch(url).then((res) => res.json())
        return await Promise.all(urlArr.map(fetcher))
    }
    const { data, error, isLoading }:any = useSWR(urls, arrayFetcher)

    if(isLoading) return <Loading />

    const dataDetail:dataTypeDetail = data[0]

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

    const datas = [
        {
            id : 1,
            date : "28 Agustus 2023",
            image : "/img/index/bg-hero-banner.webp",
            caption : "Lorem ipsum dolor sit amet consetetur adipisicing elit."
        },
        {
            id : 2,
            date : "1 September 2023",
            image : "/img/index/bg-hero-banner.webp",
            caption : "Lorem ipsum dolor sit amet consetetur adipisicing elit."
        },
        {
            id : 3,
            date : "10 September 2023",
            image : "/img/index/bg-hero-banner.webp",
            caption : "Lorem ipsum dolor sit amet consetetur adipisicing elit."
        },
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
                                    <li><strong>Jumlah Bibit :</strong> {conversion(dataDetail.jumlah_tanam)}</li>
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
                                    datas &&
                                    datas.map((item:dataType) => {
                                        return (
                                            <li>
                                                <span className="label label__main progress--date">{item.date}</span>
                                                <img src={`${item.image}`} alt="" />
                                                <p>{item.caption}</p>
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