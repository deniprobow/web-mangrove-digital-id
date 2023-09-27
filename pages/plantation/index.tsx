import { Header } from '@/components/header'
import { Loading } from '@/components/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Breadcrumb } from "@/components/breadcrumb/style"
import { CardProduct } from "@/components/cardProduct"
import useSWR from 'swr'

export default function Plantation() {
    type dataType = {
        id_pesan_tanam: number,
        nama_pemesan: string,
        lokasi_penanaman: string,
        jumlah_tanam: number,
        image: string
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

    const fetcher = async (url:string) => await fetch(url).then((res) => res.json())

    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SERVER_HOST}/pesan_tanams`, fetcher)

    if(isLoading) return <Loading />

    console.log(data)

    return (
        <>
            <Header isHomePage={false} />
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
                            data &&
                            data.map((item:dataType, index:number)=>{
                                return (
                                    <div key={index} className="mb-4 col-sm-6 col-lg-4">
                                        <CardProduct 
                                            key={index}
                                            id_pesan_tanam={item.id_pesan_tanam}
                                            nama_pemesan={item.nama_pemesan}
                                            lokasi_penanaman={item.lokasi_penanaman}
                                            jumlah_tanam={item.jumlah_tanam}
                                            image='https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/pontianakpost/2020/07/KKR-mangrove.jpg'
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