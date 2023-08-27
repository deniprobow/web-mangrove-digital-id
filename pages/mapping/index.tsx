import Link from "next/link"

export default function Mapping() {
    return (
        <>
            <div className="breadcrumb mb-0">
                <div className="container">
                    <h2>Mapping</h2>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li className="active"><Link href="/mapping">Mapping</Link></li>
                    </ul>
                </div>
            </div>
            <div className="map-google">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31918.529806852664!2d109.36383093005371!3d-0.058708350541439414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1693154364266!5m2!1sen!2sid" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}