import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { CardProduct } from "@/components/CardProduct"

export default function Plantation() {
    type dataType = {
        id : number,
        label : string,
        company : string,
        area  : string,
        image : string,
    }

    const datas = [
        {
            id : 1,
            label : "30.000 Pohon",
            company : "PT. Alpha Company",
            area  : "Kec. Paloh Kab.sambas",
            image : "/img/index/bg-hero-banner.webp"
        },
        {
            id : 2,
            label : "50.000 Pohon",
            company : "PT. Adiyaksa Company",
            area  : "Kec. Sui Pinyuh Kab.Mempawah",
            image : "/img/index/bg-hero-banner.webp"
        },
        {
            id : 3,
            label : "60.000 Pohon",
            company : "PT. Google Indonesia",
            area  : "Kec. Sui Kupah Kab.KubuRaya",
            image : "/img/index/bg-hero-banner.webp"
        },
        {
            id : 4,
            label : "40.000 Pohon",
            company : "PT. AWS Indonesia",
            area  : "Kec. Sui Kupah Kab.KubuRaya",
            image : "/img/index/bg-hero-banner.webp"
        }
    ]

    return (
        <>
            <div className="breadcrumb">
                <div className="container">
                    <h2>Plantation</h2>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li className="active"><Link href="/plantation">Plantation</Link></li>
                    </ul>
                </div>
            </div>
            <main className="main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <form action="" className="form-search">
                                <h2 className="mb-4">What are you searchin for</h2>
                                <div className="form-search--input-group">
                                    <input type="text" placeholder="search name or location" />
                                    <button type="submit"><FontAwesomeIcon icon = {faSearch} /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        {
                            datas &&
                            datas.map((item:dataType)=>{
                                return (
                                    <div className="mb-4 col-sm-6 col-lg-4">
                                        <CardProduct 
                                            metaLabel = {item.label}
                                            title = {item.company}
                                            urlLink = {"/plantation/detail/"+item.id}
                                            metaCaption = {item.area}
                                            img = {item.image}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>        
            </main>
        </>
    )
}