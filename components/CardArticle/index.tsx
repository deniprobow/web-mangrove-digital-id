import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface cardArticleProps {
    id_article: string,
    article_title: string,
    article_image: string,
    created_at: string
}

export const CardArticle = ({id_article, article_title, article_image, created_at, ...props}:cardArticleProps) => {
    return (
        <div className="card-article">
            <div className="card-article--frame-img">
                <img src={article_image} alt="" />
            </div>
            <div className="card-article--text">
                <a className="text-title" href={"article/detail/" + id_article}>{article_title}</a>
                <ul>
                    <li>
                        <FontAwesomeIcon icon = {faCalendar} />
                        <span>{created_at.split('T')[0]}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}