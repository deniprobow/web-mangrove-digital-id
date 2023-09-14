import { Header } from '@/components/header'
import { Loading } from '@/components/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Breadcrumb } from "@/components/breadcrumb/style"
import { CardProduct } from "@/components/cardProduct"

export default function Plantation() {
    type dataType = {
        id : number,
        label : string,
        company : string,
        area  : string,
        image : string,
    }

    const breadcrumbLinks = [
        {
            name : 'home',
            url : '/home'
        },{
            name : 'Plantation',
            url : '/plantation'
        }
    ]

    const datas = [
        {
            id : 1,
            label : "30.000 Pohon",
            company : "PT. Alpha Company",
            area  : "Kec. Paloh Kab.sambas",
            image : "/img/plantation-1.webp"
        },
        {
            id : 2,
            label : "50.000 Pohon",
            company : "PT. Adiyaksa Company",
            area  : "Kec. Sui Pinyuh Kab.Mempawah",
            image : "/img/plantation-2.webp"
        },
        {
            id : 3,
            label : "60.000 Pohon",
            company : "PT. Google Indonesia",
            area  : "Kec. Sui Kupah Kab.KubuRaya",
            image : "/img/plantation-3.webp"
        }
    ]

    return (
        <>
            <Header isHomePage={false} />
            <Loading />
            <Breadcrumb
                title = "Plantation"
                links = {breadcrumbLinks}
            />
            <main className="main-wrapper bg-grey">
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