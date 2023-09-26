interface cardTestimonialProps {
    nama_testimonial: string,
    profesi_testimonial: string,
    foto_testimonial: string,
    isi_testimonial: string
}

export const CardTestimonial = ({nama_testimonial, profesi_testimonial, foto_testimonial, isi_testimonial, ...props}:cardTestimonialProps) => {
    return (
        <div className="card-testimonial">
            <p className="mb-0">{ isi_testimonial }</p>
            <div className="card-testimonial--bio">
                <div className="bio--frame-img">
                    <img src={foto_testimonial} alt="" />
                </div>
                <div className="bio--text">
                    <h5 className="mb-0">{ nama_testimonial }</h5>
                    <span>{ profesi_testimonial }</span>
                </div>
            </div>
        </div>
    )
}