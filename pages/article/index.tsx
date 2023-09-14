import { Header } from '@/components/header'
import { Loading } from '@/components/Loading'
import { Breadcrumb } from '@/components/breadcrumb/style'
import { CardArticle } from '@/components/CardArticle'

export default function Article() {
    const breadcrumbLinks = [
        {
            name : 'Home',
            url : '/home'
        },{
            name : 'Articles',
            url : '/mapping'
        }
    ]

    type dataType = {
        id : number,
        img : string,
        title : string,
        caption : string,
        date : string,
        writer : string
    }
    
    const datas = [
        {
            id : 1,
            img : "/img/plantation-1.webp",
            title : "The Importance of Mangroves in Coastal Ecosystems",
            caption : "Mangroves are a vital component of coastal ecosystems worldwide, providing a wide range of ecological and economic benefits.",
            date : "15 September 2023",
            writer : "Surif Yandi"
        },{
            id : 2,
            img : "/img/plantation-2.webp",
            title : "Threats to Mangrove Ecosystems and Conservation Efforts",
            caption : "Mangrove ecosystems face an array of threats that put their survival at risk. These resilient coastal forests are under constant pressure.",
            date : "15 September 2023",
            writer : "Surif Yandi"
        },{
            id : 3,
            img : "/img/plantation-3.webp",
            title : "Exploring the Fascinating Biodiversity of Mangrove Ecosystems",
            caption : "Mangrove ecosystems are renowned for their extraordinary biodiversity and unique adaptations that enable life in the challenging conditions of coastal areas.",
            date : "15 September 2023",
            writer : "Surif Yandi"
        }
    ]

    return (
        <>
            <Header isHomePage={false} />
            <Loading />
            <Breadcrumb
                title = "Articles"
                links = {breadcrumbLinks}
            />
            <main className="main-wrapper">
                <div className="container">
                    <div className="row">
                        {
                            datas &&
                            datas.map((item:dataType)=>{
                                return (
                                    <div className="mb-4 col-sm-6 col-lg-4">
                                        <CardArticle
                                            id = {item.id}
                                            img = {item.img}
                                            title = {item.title}
                                            caption = {item.caption}
                                            date = {item.date}
                                            writer = {item.writer}
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