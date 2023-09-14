import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface cardArticleProps {
    id : number,
    img : string,
    title : string,
    caption : string,
    date : string,
    writer : string
}

export const CardArticle = ({id, img, title, caption, date, writer, ...props}:cardArticleProps) => {
    return (
        <div className="card-article">
            <div className="card-article--frame-img">
                <img src={img} alt="" />
            </div>
            <div className="card-article--text">
                <a className="text-title" href={"article/detail/" + id}>{title}</a>
                <ul>
                    <li>
                        <FontAwesomeIcon icon = {faCalendar} />
                        <span>{date}</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon = {faUser} />
                        <span>{writer}</span>
                    </li>
                </ul>
                <p>{caption}</p>
                <a className="text-readmore" href={"article/detail/" + id}>Readmore</a>
            </div>
        </div>
    )
}