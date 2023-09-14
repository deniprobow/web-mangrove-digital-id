import { Header } from '@/components/header'
import { Loading } from '@/components/Loading'
import { Breadcrumb } from '@/components/breadcrumb/style'
import { useRouter } from 'next/router'
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DetailArticle() {
    const router = useRouter()

    type dataType = {
        id : number,
        title : string,
        date : string,
        writer : string,
        img : string,
        text : string,
    }

    const breadcrumbLinks = [
        {
            name : 'Home',
            url : '/home'
        },{
            name : 'Article',
            url : '/artcle'
        },{
            name : 'Detail Article',
            url : '/article/detail/' + router.query.id
        }
    ]

    const datas = [
        {
            id : 1,
            title : 'The Importance of Mangroves in Coastal Ecosystems',
            date : '15 September 2023',
            writer : 'Surif Yandi',
            img : '/img/album/album-cover-4.webp',
            text : 'Mangroves are a vital component of coastal ecosystems worldwide, providing a wide range of ecological and economic benefits. These unique coastal forests thrive in the transition zone between land and sea, where they endure the challenges of saltwater, tides, and often harsh environmental conditions. In this article, we explore the significance of mangroves and their crucial roles in maintaining the health of coastal environments.'
        }
    ]

    return (
        <>
            <Header isHomePage={false} />
            <Loading />
            <Breadcrumb
                title = "Detail Article"
                links = {breadcrumbLinks}
            />
            <main className="main-wrapper single-post">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            {
                                datas &&
                                datas.map((data:dataType) => {
                                    return (
                                        <>
                                            <h2 className="mb-4">{data.title}</h2>
                                            <ul className="single-post--meta mb-4">
                                                <li>
                                                    <FontAwesomeIcon icon = {faCalendar} />
                                                    <span>{data.date}</span>
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon = {faUser} />
                                                    <span>{data.writer}</span>
                                                </li>
                                            </ul>
                                            <img className="img-fluid mb-4" src={data.img} alt="" />
                                            <p>{data.text}</p>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}