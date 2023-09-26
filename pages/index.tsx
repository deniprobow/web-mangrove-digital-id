
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons'
import { Header } from '@/components/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Loading } from '@/components/Loading'
import { CardService } from '@/components/cardService'
import { CardTestimonial } from '@/components/cardTestimonial'
import { CardProduct } from "@/components/cardProduct"
import { DataCounts } from '@/dataDummy/dataCounts'
import { DataPlantations } from '@/dataDummy/dataPlantations'
import useSWR from 'swr'
import { useRef, useState, useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from 'next/link';

export default function Home() {
    const refSlide = useRef(null)
    const [currentIndexSlide, setCurrentIndexSlide] = useState<number>(0)
    const [totalSlide, setTotalSlide] = useState<number>(0)

    useEffect(() => {
        if(refSlide.current) {
            setTotalSlide(refSlide.current.props.children.length)
        }
    }, [])

    const slickSettings = {
        dots : false,
        infinite : true,
        speed : 500,
        slidesToShow : 1,
        variableWidth : true,
        afterChange : (index: number) => {
            setCurrentIndexSlide(index)
        },
        responsive : [
            {
                breakpoint: 991,
                settings : {
                    centerMode: true
                }
            },{
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    variableWidth: false
                }
            }
        ],
    }

    type dataTypePartners = {
        logo_partner: string
    }

    type dataTypeTestimonial = {
        nama_testimonial: string,
        profesi_testimonial: string,
        foto_testimonial: string,
        isi_testimonial: string
    }

    type dataTypeCount = {
        icon : string,
        label : string,
        count : string
    }

    type dataTypePlantation = {
        id : number,
        label : string,
        company : string,
        area  : string,
        image : string,
    }

    const urls:string[] = [
        'http://202.157.186.124:3031/partners',
        'http://202.157.186.124:3031/testimonials'
    ]

    async function arrayFetcher(urlArr:string[]) {
        const fetcher = async (url:string) => fetch(url).then((res) => res.json())
        return await Promise.all(urlArr.map(fetcher))
    }
    const { data, error, isLoading }:any = useSWR(urls, arrayFetcher)
    
    if(isLoading) return <Loading />

    const dataPartners = data[0]
    const dataTestmonials = data[1]

    return (
        <>
            <Header isHomePage={true}></Header>

            <section className="hero-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 hero-banner--img order-lg-2">
                            {
                                DataCounts &&
                                DataCounts.map((item:dataTypeCount, index) => {
                                    return (
                                        <div key={index} className="tile-count">
                                            <img src={item.icon} alt="" />
                                            <div className="tile-text">
                                                <h2>{item.count}</h2>
                                                <span>{item.label}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <img src="/img/index/img-hero-banner.webp" alt="" />
                        </div>
                        <div className="col-lg-6 hero-banner--text order-lg-1">
                            <h1 className="mb-5">Mangrove Digital : Menanam Mangrove, Menyelamatkan Bumi</h1>
                            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
                                <a href="#" className="btn btn__banner">
                                    <FontAwesomeIcon icon = {faGooglePlay} />
                                    <span className="ms-3">Playstore</span>
                                </a>
                                <a href="#" className="btn btn__banner">
                                    <FontAwesomeIcon icon = {faApple} />
                                    <span className="ms-3">AppStore</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partner bg-grey">
                <div className="container">
                    <ul>

                        {
                            dataPartners.map((item:dataTypePartners, index) => {
                                return (
                                    <li key={index}>
                                        <img src={item.logo_partner} height="80px" alt="" />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>

            <section className="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-us--side-img mb-5 mb-lg-0">
                            <img src="/img/index/img-about-us.jpg" alt="" />
                        </div>
                        <div className="col-lg-5 offset-lg-1 about-us--side-text">
                            <h1 className="h-section">About Us & Our History</h1>
                            <p>In the vast expanse of the digital world, the concept of a "Digital Mangrove" has emerged as an intriguing analogy. Just like the intricate ecosystem of a mangrove forest that plays a pivotal role in supporting diverse marine life, the digital mangrove symbolizes the virtual spaces that foster and sustain a multitude of online activities, connections, and experiences. Let's dive into the captivating realm of the digital mangrove and uncover its significance in our modern age.</p>
                            <div className="d-block pt-4">
                                <Link href="#" className="btn btn__main">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-grey">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6 offset-lg-3">
                            <h1 className="h-section text-center">Exploring Our Services For Save The World</h1>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <CardService
                                img = "/img/index/service-1.webp"
                                title = "Order Plantation"
                                description= "The digital mangrove is characterized by its rich diversity of content. From blog posts to videos, podcasts to memes, it hosts a plethora of multimedia elements that cater to a wide range of interests. This dynamic environment allows creators to showcase their talents."
                            />
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <CardService 
                                img = "/img/index/service-2.webp"
                                title = "Order Seeds"
                                description= "The digital mangrove is characterized by its rich diversity of content. From blog posts to videos, podcasts to memes, it hosts a plethora of multimedia elements that cater to a wide range of interests. This dynamic environment allows creators to showcase their talents."
                            />
                        </div>
                        <div className="col-lg-4">
                            <CardService 
                                img = "/img/index/service-3.webp"
                                title = "Restore Carbons"
                                description= "Just as mangroves have evolved to thrive in harsh coastal environments, the digital mangrove demonstrates a remarkable ability to adapt. Trends come and go, platforms evolve, and user behaviors change In this ever-evolving ecosystem, content creators and digital entities must stay nimble."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 testimonial--side-text mb-5 mb-lg-0">
                            <h1 className="h-section mb-0">Public Figure Said About Us</h1>
                            <p className="mb-0">the concept of the digital mangrove serves as a captivating analogy that mirrors the intricate interplay of connectivity, diversity, adaptation, and preservation in our online world.</p>
                            <div className="testimonial--action-slider">
                                <div className="testimonial--count-slider">
                                    {currentIndexSlide + 1} / {dataTestmonials.length}
                                </div>
                                <div className="testimonial--nav-slider">
                                    <div className="nav-slider nav-slider__left" onClick={() => refSlide?.current?.slickPrev()}>
                                        <FontAwesomeIcon icon = {faArrowLeft} />
                                    </div>
                                    <div className="nav-slider nav-slider__right" onClick={() => refSlide?.current?.slickNext()}>
                                        <FontAwesomeIcon icon = {faArrowRight} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <Slider ref={refSlide} {...slickSettings}>
                                {
                                    dataTestmonials &&
                                    dataTestmonials.map((item:dataTypeTestimonial, index) => {
                                        return (
                                            <CardTestimonial
                                                key={index}
                                                nama_testimonial={item.nama_testimonial}
                                                profesi_testimonial={item.profesi_testimonial}
                                                foto_testimonial={item.foto_testimonial}
                                                isi_testimonial={item.isi_testimonial}
                                            />
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className="download bg-grey">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6 offset-lg-3">
                            <h1 className="h-section text-center">Latest Plantation</h1>
                        </div>
                    </div>
                    <div className="row">
                        {
                            DataPlantations &&
                            DataPlantations.map((item:dataTypePlantation, index)=>{
                                return (
                                    <div key={index} className="mb-4 col-lg-4">
                                        <CardProduct 
                                            metaLabel = {item.label}
                                            title = {item.company}
                                            urlLink = {"/plantation/detail/"+item.id}
                                            metaCaption = {item.area}
                                            img = {item.image}
                                            key = {index}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 download--side-img mb-5 mb-lg-0">
                            <img src="/img/index/mobile-app.webp" alt="" />
                        </div>
                        <div className="col-lg-6 offset-lg-1 download--side-text">
                            <h1 className="text-center text-lg-start">Download Aplikasi Mangrove Digital</h1>
                            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
                                <a href="#" className="btn btn__banner">
                                    <FontAwesomeIcon icon = {faGooglePlay} />
                                    <span className="ms-3">Playstore</span>
                                </a>
                                <a href="#" className="btn btn__banner">
                                    <FontAwesomeIcon icon = {faApple} />
                                    <span className="ms-3">AppStore</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
