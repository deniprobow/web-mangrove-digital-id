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
        <div className="card-product h-100">
            <div className="card-product--frame-img">
                <img src={`${img}`} alt="" />
            </div>
            <div className="card-product--text">
                <label className="label label__main">{metaLabel}</label>
                <Link href={`${urlLink}`}>{title}</Link>
                <span>{metaCaption}</span>
            </div>
        </div>
    )
}