interface CardPersonProps{
    team_name : string,
    team_jabatan : string,
    team_photo  : string
}

export const CardPerson = ({team_name, team_jabatan, team_photo, ...props}: CardPersonProps) => {
    return (
        <div className="card-person">
            <div className="card-person--frame-img">
                <img src={team_photo} alt="" />
            </div>
            <div className="card-person--text">
                <h4>{team_name}</h4>
                <span>{team_jabatan}</span>
            </div>
        </div>
    )
}