import Link from "next/link"
import { useState, useEffect } from 'react'

export const Header = () => {
    const [isScrolled, setScrolled] = useState(false)

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
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About Us</Link></li>
                        <li><Link href="/plantation">Plantation</Link></li>
                        <li><Link href="/">Mapping</Link></li>
                        <li><Link href="/">Gallery</Link></li>
                        <li><Link href="/">Contact</Link></li>
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