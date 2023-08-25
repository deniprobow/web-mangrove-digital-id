import Link from "next/link";
import { useState, useEffect } from 'react'

export const Header = () => {
    const [scrolled, setScrolled] = useState(false)

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
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link className="header--logo" href="/">Mangrove Digital</Link>
                <nav className="header--nav">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About Us</Link></li>
                        <li><Link href="/">Plantation</Link></li>
                        <li><Link href="/">Mapping</Link></li>
                        <li><Link href="/">Gallery</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}