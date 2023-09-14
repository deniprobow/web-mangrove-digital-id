import { Header } from '@/components/header'
import { Loading } from '@/components/Loading'
import { Breadcrumb } from '@/components/breadcrumb/style'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
    const breadcrumbLinks = [
        {
            name : 'Home',
            url : '/home'
        },{
            name : 'Contact',
            url : '/mapping'
        }
    ]

    return (
        <>
            <Header isHomePage={false} />
            <Loading />
            <Breadcrumb
                title = "Contact"
                links = {breadcrumbLinks}
            />
            <main className="main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="map-google map-google__contact">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31918.529806852664!2d109.36383093005371!3d-0.058708350541439414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1693154364266!5m2!1sen!2sid" width="100%" height="600" allowFullScreen="" loading="lazy" refererPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <h1 className="h-section">Contact Us</h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium fugiat repellat ducimus excepturi, eaque nostrum, vero porro, perferendis laborum quidem blanditiis. Saepe dolor excepturi cumque quidem, atque beatae voluptatibus eum.</p>
                            <ul className="contact-list">
                                <li>
                                    <span className="contact-list--icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </span>
                                    <span className="contact-list--text">Desa Sungai Kupah Kecamatan Sungai Kakap Kabupaten Kubu Raya, Provinsi Kalimantan Barat, Indonesia</span>
                                </li>
                                <li>
                                    <span className="contact-list--icon">
                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                    </span>
                                    <span className="contact-list--text">+123 456 789</span>
                                </li>
                                <li>
                                    <span className="contact-list--icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <span className="contact-list--text">mangrovedigital@mail.com</span>
                                </li>
                                <li>
                                    <span className="contact-list--icon">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </span>
                                    <span className="contact-list--text">Mangrove Digital</span>
                                </li>
                                <li>
                                    <span className="contact-list--icon">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </span>
                                    <span className="contact-list--text">Mangrove Digital</span>
                                </li>
                                <li>
                                    <span className="contact-list--icon">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </span>
                                    <span className="contact-list--text">Mangrove Digital</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}