import Link from "next/link";
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h3 className="footer--heading mb-4">Mangrove Digital</h3>
                        <p>Desa Sungai Kupah Kecamatan Sungai Kakap Kabupaten Kubu Raya, Provinsi Kalimantan Barat, Indonesia</p>
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-5 mb-sm-0 offset-lg-1">
                        <nav className="footer--nav">
                            <h6 className="footer--heading mb-4">Site Map</h6>
                            <ul>
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">Services</Link></li>
                                <li><Link href="#">Blogs</Link></li>
                                <li><Link href="#">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-5 mb-sm-0">
                    <nav className="footer--nav">
                        <h6 className="footer--heading mb-4">Legal</h6>
                        <ul>
                            <li><Link href="#">Term and Condition</Link></li>
                            <li><Link href="#">Cookies and Policy</Link></li>
                            <li><Link href="#">Privacy and Policy</Link></li>
                            <li><Link href="#">Affiliate Agreement</Link></li>
                        </ul>
                    </nav>
                    </div>
                    <div className="col-lg-2 col-sm-4 offset-lg-1">
                        <h6 className="footer--heading mb-4">Follow Us</h6>
                        <ul>
                            <li>
                                <Link href="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                    <span className="ms-3">Facebook</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <span className="ms-3">Twitter</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <span className="ms-3">Instagram</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container container__copyright">
                &copy; 2023 Mangrove Digital. All Right Reserved.
            </div>
        </footer>
    )
}