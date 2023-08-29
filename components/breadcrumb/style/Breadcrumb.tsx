import Link from "next/link"

interface BreadcrumbProps {
    title : string,
    links : [{
        name : string,
        url : string
    }]
}

export const Breadcrumb = ({title, links, ...props}: BreadcrumbProps) => {
    return (
        <div className="breadcrumb">
            <div className="container">
                <h2>{title}</h2>
                <ul>
                    {
                        links.map((link, index) => {
                            return (
                                <li className={`${index === links.length - 1 && "active"}`} ><Link href={`${link.url}`}>{link.name}</Link></li>
                            )
                        })
                    }
                    {/* <li><Link href="/">Home</Link></li>
                    <li className="active"><Link href="/about">About Us</Link></li> */}
                </ul>
            </div>
        </div>
    )
}