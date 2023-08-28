import Link from "next/link"
import { CardPerson } from "@/components/CardPerson"

export default function About() {
    type dataType = {
        id : number,
        name : string,
        position : string,
        img  : string
    }

    const datas = [
        {
            id : 1,
            name : 'Sonny Houston',
            position : 'Founder',
            img : 'https://randomuser.me/api/portraits/men/97.jpg'
        },{
            id : 2,
            name : 'Enya Cummings',
            position : 'Co Founder',
            img : 'https://randomuser.me/api/portraits/women/79.jpg'
        },{
            id : 3,
            name : 'Sarah Humphrey',
            position : 'Chief Executive Officer',
            img : 'https://randomuser.me/api/portraits/women/63.jpg'
        },{
            id : 4,
            name : 'Veronica Cole',
            position : 'Chief Operation Officer',
            img : 'https://randomuser.me/api/portraits/women/8.jpg'
        },{
            id : 5,
            name : 'Mohamed Krueger',
            position : 'Chief Technology Officer',
            img : 'https://randomuser.me/api/portraits/men/22.jpg'
        },{
            id : 6,
            name : 'Mason Grimes',
            position : 'Chief Marketing Officer',
            img : 'https://randomuser.me/api/portraits/men/4.jpg'
        }
    ]
    return (
        <>
            <div className="breadcrumb">
                <div className="container">
                    <h2>About US</h2>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li className="active"><Link href="/about">About Us</Link></li>
                    </ul>
                </div>
            </div>
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
                            datas &&
                            datas.map((item:dataType) => {
                                return (
                                    <div className="col-sm-6 col-lg-3 mb-4">
                                        <CardPerson 
                                            img = {item.img}
                                            name = {item.name}
                                            position= {item.position}
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