interface CardPersonProps{
    img : string,
    name : string,
    position: string
}

export const CardPerson = ({img, name, position, ...props}: CardPersonProps) => {
    return (
        <div className="card-person">
            <div className="card-person--frame-img">
                <img src={`${img}`} alt="" />
            </div>
            <div className="card-person--text">
                <h4>{name}</h4>
                <span>{position}</span>
            </div>
        </div>
    )
}