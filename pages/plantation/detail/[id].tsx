import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb/style'
import { FormatNumber } from '@/modules/utils/formatNumber'
import { FormatDate } from '@/modules/utils/formatDate'
import useSWR from 'swr'

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/pesan_tanams`)
    const dataPesanTanams = await res.json()

    const paths = dataPesanTanams.map((dataPesantanam: DataPesanTanam) => ({
        params: {
            id: `${dataPesantanam.id_pesan_tanam}`
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = (async (context:any) => {
    const { id } = context.params
    const resDataPesanTanam = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/pesan_tanams/${id}`)
    const resTimeline = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/timelines/${id}`)
    const dataPesanTanam = await resDataPesanTanam.json()
    const dataTimeline = await resTimeline.json()
    return {
        props: {
            dataPesanTanam,
            dataTimeline   
        },
        revalidate: 60
    }
})

type DataProps = {
    dataPesanTanam: DataPesanTanam,
    dataTimeline: Timeline[]
}

export default function DetailPlantation({...props}: DataProps) {
    console.log(props)

    const dataPesanTanam: DataPesanTanam = props.dataPesanTanam
    const dataTimeline: Timeline[] = props.dataTimeline 

    const breadcrumbLinks = [
        {
            name : 'Home',
            url : '/home'
        },{
            name : 'Plantation',
            url : '/plantation'
        }, {
            name : dataPesanTanam.nama_pemesan,
            url : '/plantation/detail/' + dataPesanTanam.id_pesan_tanam
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
                                <h1 className="plantation-detail--title">{dataPesanTanam.nama_pemesan}</h1>
                                <ul className="plantation-detail--meta">
                                    <li><strong>Jumlah Bibit :</strong> {FormatNumber(dataPesanTanam.jumlah_tanam)}</li>
                                    <li><strong>Waktu Penanaman: </strong> {dataPesanTanam.waktu_penanaman}</li>
                                    <li><strong>Alamat Penamaman :</strong> {dataPesanTanam.lokasi_penanaman}</li>
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
                                    dataTimeline.map((item:Timeline, index:number) => {
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