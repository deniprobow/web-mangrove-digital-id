import Image from 'next/image'
import { Header } from '@/components/header/Header'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardService } from '@/components/cardService/CardService'
import { CardTestimonial } from '@/components/cardTestimonial/CardTestimonial'
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <section className="hero-banner">
                <div className="container">
                    <div className="col-lg-8">
                        <h1 className="hero-banner--text">Mangrove Digital : Menanam Mangrove, Menyelamatkan Bumi</h1>
                    </div>
                </div>
            </section>

            <section className="partner bg-grey">
                <div className="container">
                    <ul>
                        <li><img src="/img/index/logo-akcaya.png" height="100px" alt="" /></li>
                        <li><img src="/img/index/logo-brgm.png" height="100px" alt="" /></li>
                        <li><img src="/img/index/logo-kementrian-kelautan-perikanan.png" height="100px" alt="" /></li>
                        <li><img src="/img/index/logo-kubu-raya.png" height="100px" alt="" /></li>
                        <li><img src="/img/index/logo-mowilex.png" height="70px" alt="" /></li>
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
                                    1 / 4
                                </div>
                                <div className="testimonial--nav-slider">
                                    <a className="nav-slider nav-slider__left" href="#">
                                        <FontAwesomeIcon icon = {faArrowLeft} />
                                    </a>
                                    <a href="" className="nav-slider nav-slider__right">
                                        <FontAwesomeIcon icon = {faArrowRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <CardTestimonial
                                caption = "Digital Mangrove has been an absolute game-changer for our business. Their expertise in digital marketing and web development helped us establish a strong online presence and reach our target audience effectively. Their innovative strategies and creative approach have significantly boosted our brand visibility and engagement."
                                img = "/img/index/sandiaga-uno.jpg"
                                name = "Sandiaga Uno"
                                position= "Mentri Pariwisata"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="download bg-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 download--side-img mb-5 mb-lg-0">
                            <img src="/img/index/mobile-app.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 offset-lg-1 download--side-text">
                            <h1>Download Aplikasi Mangrove Digital</h1>
                            <a href="#">
                                <FontAwesomeIcon icon = {faGooglePlay} />
                                <span className="ms-3">Playstore</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
