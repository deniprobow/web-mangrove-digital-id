interface cardTestimonialProps {
    caption : string,
    img : string,
    name : string,
    position : string
}

export const CardTestimonial = ({caption, img, name, position, ...props}:cardTestimonialProps) => {
    return (
        <div className="card-testimonial">
            <p className="mb-0">{ caption }</p>
            <div className="card-testimonial--bio">
                <div className="bio--frame-img">
                    <img src={`${img}`} alt="" />
                </div>
                <div className="bio--text">
                    <h5 className="mb-0">{ name }</h5>
                    <span>{ position }</span>
                </div>
            </div>
        </div>
    )
}