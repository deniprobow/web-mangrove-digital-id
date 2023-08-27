import Link from "next/link"

interface CardProductProps {
    metaLabel : string,
    title : string,
    urlLink : string,
    metaCaption : string,
    img : string
}

export const CardProduct = ({metaLabel, title, urlLink, metaCaption, img, ...props}:CardProductProps) => {
    return (
        <div className="card-product">
            <img src={`${img}`} alt="" />
            <div className="card-product--text">
                <label className="label label__main">{metaLabel}</label>
                <Link href={`${urlLink}`}>{title}</Link>
                <span>{metaCaption}</span>
            </div>
        </div>
    )
}