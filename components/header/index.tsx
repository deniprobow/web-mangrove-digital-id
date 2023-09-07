import Link from "next/link"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"

export const Header = () => {
    const [isScrolled, setScrolled] = useState(false)

    const router = useRouter()

    const toogleNavMobile = () => {
        const elBody = document.querySelector('body')
        elBody?.classList.toggle('toggle-nav-mobile')
    } 

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }   

        window.addEventListener('scroll', handleScroll)

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header onClick={toogleNavMobile} className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link className="header--logo" href="/">Mangrove Digital</Link>
                <nav className="header--nav">
                    <Link href="#">Mangrove Digital</Link>
                    <ul>
                        <li className={router.pathname == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                        <li className={router.pathname == "/about" ? "active" : ""}><Link href="/about">About Us</Link></li>
                        <li className={router.pathname == "/plantation" ? "active" : ""}><Link href="/plantation">Plantation</Link></li>
                        <li className={router.pathname == "/mapping" ? "active" : ""}><Link href="/mapping">Mapping</Link></li>
                        <li className={router.pathname == "/album" ? "active" : ""}><Link href="/album">Gallery</Link></li>
                        <li className={router.pathname == "/contact" ? "active" : ""}><Link href="/contact">Contact</Link></li>
                        <li className="nav-main"><Link href="/order">Order</Link></li>
                    </ul>
                </nav>
                <div className="header--toggle-nav-mobile">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}