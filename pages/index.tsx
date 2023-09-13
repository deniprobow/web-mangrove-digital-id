
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Loading } from '@/components/Loading'
import { CardService } from '@/components/cardService'
import { CardTestimonial } from '@/components/cardTestimonial'
import { CardProduct } from "@/components/cardProduct"
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

    type dataType = {
        img : string,
        name : string,
        position: string,
        testimonial : string
    }

    const dataTestmonials = [
        {
            img : '/img/index/sandiaga-uno.jpg',
            name : 'Sandiaga Uno',
            position: 'Menteri Pariwisata',
            testimonial : 'Digital Mangrove has been an absolute game-changer for our business. Their expertise in digital marketing and web development helped us establish a strong online presence and reach our target audience effectively. Their innovative strategies and creative approach have significantly boosted our brand visibility and engagement.'
        },{
            img : '/img/index/sandiaga-uno.jpg',
            name : 'Sandiaga Uno',
            position: 'Menteri Pariwisata',
            testimonial : 'Digital Mangrove has been an absolute game-changer for our business. Their expertise in digital marketing and web development helped us establish a strong online presence and reach our target audience effectively. Their innovative strategies and creative approach have significantly boosted our brand visibility and engagement.'
        },{
            img : '/img/index/sandiaga-uno.jpg',
            name : 'Sandiaga Uno',
            position: 'Menteri Pariwisata',
            testimonial : 'Digital Mangrove has been an absolute game-changer for our business. Their expertise in digital marketing and web development helped us establish a strong online presence and reach our target audience effectively. Their innovative strategies and creative approach have significantly boosted our brand visibility and engagement.'
        }
    ]

    type dataTypePlantation = {
        id : number,
        label : string,
        company : string,
        area  : string,
        image : string,
    }

    const dataPlantations = [
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
            <Loading />
            <section className="hero-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 hero-banner--img order-lg-2">
                            <div className="tile-count">
                                <img src="/img/index/icon-ecology.webp" alt="" />
                                <div className="tile-text">
                                    <h2>500</h2>
                                    <span>Donation</span>
                                </div>
                            </div>
                            <div className="tile-count">
                                <img src="/img/index/icon-marker.webp" alt="" />
                                <div className="tile-text">
                                    <h2>200</h2>
                                    <span>Places</span>
                                </div>
                            </div>
                            <div className="tile-count">
                                <img src="/img/index/icon-seed.webp" alt="" />
                                <div className="tile-text">
                                    <h2>45M+</h2>
                                    <span>Seed Planting</span>
                                </div>
                            </div>
                            <img src="/img/index/img-hero-banner.webp" alt="" />
                        </div>
                        <div className="col-lg-6 hero-banner--text order-lg-1">
                            <h1 className="mb-5">Mangrove Digital : Menanam Mangrove, Menyelamatkan Bumi</h1>
                            <div className="d-flex gap-2">
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
                        <li><img src="/img/index/logo-akcaya.png" height="80px" alt="" /></li>
                        <li><img src="/img/index/logo-brgm.png" height="80px" alt="" /></li>
                        <li><img src="/img/index/logo-kementrian-kelautan-perikanan.png" height="80px" alt="" /></li>
                        <li><img src="/img/index/logo-kubu-raya.png" height="80px" alt="" /></li>
                        <li><img src="/img/index/logo-mowilex.png" height="50px" alt="" /></li>
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
                                img = "/img/index/icon-service-1.png"
                                title = "Order Plantation"
                                description= "The digital mangrove is characterized by its rich diversity of content. From blog posts to videos, podcasts to memes, it hosts a plethora of multimedia elements that cater to a wide range of interests. This dynamic environment allows creators to showcase their talents."
                            />
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <CardService 
                                img = "/img/index/icon-service-2.png"
                                title = "Order Seeds"
                                description= "The digital mangrove is characterized by its rich diversity of content. From blog posts to videos, podcasts to memes, it hosts a plethora of multimedia elements that cater to a wide range of interests. This dynamic environment allows creators to showcase their talents."
                            />
                        </div>
                        <div className="col-lg-4">
                            <CardService 
                                img = "/img/index/icon-service-3.png"
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
                                    {currentIndexSlide + 1} / {totalSlide}
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
                                    dataTestmonials.map((item:dataType) => {
                                        return (
                                            <CardTestimonial
                                                caption = {item.testimonial}
                                                img = {item.img}
                                                name = {item.name}
                                                position = {item.position}
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
                            dataPlantations &&
                            dataPlantations.map((item:dataTypePlantation)=>{
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
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 download--side-img mb-5 mb-lg-0">
                            <img src="/img/index/mobile-app.webp" alt="" />
                        </div>
                        <div className="col-lg-6 offset-lg-1 download--side-text">
                            <h1 className="mb-4">Download Aplikasi Mangrove Digital</h1>
                            <div className="d-flex gap-2">
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
