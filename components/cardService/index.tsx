import Link from 'next/link'

interface cardServiceProps {
    product_name: string,
    product_description: string,
    current_price: string
}

export const CardService = ({product_name, product_description, current_price, ...props}:cardServiceProps) => {
    return (
        <div className="card-service">
            <div className="card-text">
                <h3>{product_name}</h3>
                <p>{product_description}</p>
                <span>Rp. {current_price}</span>
                <Link className="btn btn__main" href="/donation">Make Donation</Link>
            </div>
        </div>
    )
}