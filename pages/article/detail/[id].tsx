import { Header } from '@/components/header'
import { Loading } from '@/components/Loading'
import { Breadcrumb } from '@/components/breadcrumb/style'
import { useRouter } from 'next/router'
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useSWR from 'swr'

export default function DetailArticle() {
    const router = useRouter()

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

    const fetcher = async (url:string) => fetch(url).then((res) => res.json())

    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SERVER_HOST}/articles/${router.query.id}`, fetcher)

    if(isLoading) return <Loading />

    console.log(data)

    return (
        <>
            <Header isHomePage={false} />
            <Breadcrumb
                title = "Detail Article"
                links = {breadcrumbLinks}
            />
            <main className="main-wrapper single-post">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <h2 className="mb-4">{data.article_title}</h2>
                            <ul className="single-post--meta mb-4">
                                <li>
                                    <FontAwesomeIcon icon = {faCalendar} />
                                    <span>{data.created_at.split('T')[0]}</span>
                                </li>
                            </ul>
                            <img className="img-fluid mb-4" src={data.article_image} alt="" />
                            <div>{data.article_content}</div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}