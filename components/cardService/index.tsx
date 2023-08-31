interface cardServiceProps {
    img : string,
    title : string,
    description : string
}

export const CardService = ({img, title, description, ...props}:cardServiceProps) => {
    return (
        <div className="card-service">
            <img src={`${img}`} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}