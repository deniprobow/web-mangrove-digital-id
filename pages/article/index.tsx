import useSWR from 'swr'
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
        id_article: string,
        article_title: string,
        article_image: string,
        created_at: string
    }

    const fetcher = async (url:string) => fetch(url).then((res) => res.json())

    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SERVER_HOST}/articles`, fetcher)

    if(isLoading) return <Loading />

    const datas = data

    return (
        <>
            <Header isHomePage={false} />
            <Breadcrumb
                title = "Articles"
                links = {breadcrumbLinks}
            />
            <main className="main-wrapper">
                <div className="container">
                    <div className="row">
                        {
                            datas &&
                            datas.map((item:dataType, index)=>{
                                return (
                                    <div className="mb-4 col-sm-6 col-lg-4" key={index}>
                                        <CardArticle
                                            id_article={item.id_article}
                                            article_title={item.article_title}
                                            article_image={item.article_image}
                                            created_at={item.created_at}
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