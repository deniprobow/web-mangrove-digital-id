import Link from 'next/link'

interface cardServiceProps {
    product_name: string,
    product_description: string,
    link: string
}

export const CardService = ({product_name, product_description, link, ...props}:cardServiceProps) => {
    return (
        <div className="card-service">
            <div className="card-text">
                <h3>{product_name}</h3>
                <p>{product_description}</p>
                <Link className="btn btn__main" href={link}>Make Donation</Link>
            </div>
        </div>
    )
}