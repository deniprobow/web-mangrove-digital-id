import Link from "next/link"
import { useRouter } from "next/router"
import { Breadcrumb } from "@/components/breadcrumb/style/Breadcrumb"

export default function DetailPlantation() {
    const router = useRouter()

    type dataType = {
        id : number,
        date : string,
        image : string,
        caption : string
    }

    const breadcrumbLinks = [
        {
            name : 'Home',
            url : '/home'
        },{
            name : 'Plantation',
            url : '/plantation'
        }, {
            name : 'Detail Plantation',
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
            <Breadcrumb
                title = "Detail Plantation"
                links = {breadcrumbLinks}
            />
            <main className="main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 plantation-detail mb-5 mb-lg-0">
                            <div className="plantation-detail--inner">
                                <h1 className="plantation-detail--title">PT. Alpha Company</h1>
                                <ul className="plantation-detail--meta">
                                    <li><strong>Jumlah Bibit :</strong> 5.000 bibit</li>
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