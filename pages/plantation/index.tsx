import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { CardProduct } from "@/components/CardProduct"

export default function Plantation() {
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
                        <div className="mb-4 col-sm-6 col-lg-4 col-xl-3">
                            <CardProduct 
                                metaLabel = "3.000 bibit"
                                title = "PT. Alpha Company"
                                urlLink = "/"
                                metaCaption = "Kec. Paloh Kab.sambas"
                                img = "/img/index/bg-hero-banner.webp"
                            />
                        </div>
                        <div className="mb-4 col-sm-6 col-lg-4 col-xl-3">
                            <CardProduct 
                                metaLabel = "3.000 bibit"
                                title = "PT. Alpha Company"
                                urlLink = "/"
                                metaCaption = "Kec. Paloh Kab.sambas"
                                img = "/img/index/bg-hero-banner.webp"
                            />
                        </div>
                        <div className="mb-4 col-sm-6 col-lg-4 col-xl-3">
                            <CardProduct 
                                metaLabel = "3.000 bibit"
                                title = "PT. Alpha Company"
                                urlLink = "/"
                                metaCaption = "Kec. Paloh Kab.sambas"
                                img = "/img/index/bg-hero-banner.webp"
                            />
                        </div>
                        <div className="mb-4 col-sm-6 col-lg-4 col-xl-3">
                            <CardProduct 
                                metaLabel = "3.000 bibit"
                                title = "PT. Alpha Company"
                                urlLink = "/"
                                metaCaption = "Kec. Paloh Kab.sambas"
                                img = "/img/index/bg-hero-banner.webp"
                            />
                        </div>
                    </div>
                </div>        
            </main>
        </>
    )
}