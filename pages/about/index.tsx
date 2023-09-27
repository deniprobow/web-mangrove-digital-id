import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb/style'
import { CardPerson } from '@/components/cardPerson'
import { Loading } from '@/components/Loading'
import useSWR from 'swr'

export default function About() {
    type dataType = {
        team_name : string,
        team_jabatan : string,
        team_photo  : string
    }

    const breadcrumbLinks = [
        {
            name : 'home',
            url : '/home'
        },{
            name : 'About Us',
            url : '/about'
        }
    ]

    const fetcher = async (url:string) => fetch(url).then((res) => res.json())
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SERVER_HOST}/teams`, fetcher)

    if(isLoading) return <Loading />

    return (
        <>
            <Header isHomePage={false} />
            <Breadcrumb
                title = "About Us"
                links = {breadcrumbLinks}
            />
            <main className="main-wrapper">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-lg-6 about-us--side-img mb-5 mb-lg-0">
                            <img src="/img/index/img-about-us.jpg" alt="" />
                        </div>
                        <div className="col-lg-5 offset-lg-1 about-us--side-text">
                            <h1 className="h-section">About Us & Our History</h1>
                            <p>In the vast expanse of the digital world, the concept of a "Digital Mangrove" has emerged as an intriguing analogy. Just like the intricate ecosystem of a mangrove forest that plays a pivotal role in supporting diverse marine life, the digital mangrove symbolizes the virtual spaces that foster and sustain a multitude of online activities, connections, and experiences. Let's dive into the captivating realm of the digital mangrove and uncover its significance in our modern age.</p>
                        </div>
                    </div>
                    <div className="row mt-5 pt-5 justify-content-center">
                        <h1 className="text-center mb-5 pb-4 h-section">Meet Our Team</h1>
                        {
                            data &&
                            data.map((item:dataType, index:number) => {
                                return (
                                    <div key={index} className="col-sm-6 col-lg-3 mb-4">
                                        <CardPerson 
                                            team_name={item.team_name}
                                            team_jabatan={item.team_jabatan}
                                            team_photo={item.team_photo}
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