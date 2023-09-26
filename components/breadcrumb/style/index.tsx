import Link from "next/link"

interface BreadcrumbProps {
    title : string,
    links : {
        name : string,
        url : string
    }[]
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
                                <li key={index} className={`${index === links.length - 1 && "active"}`} ><Link href={link.url}>{link.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}