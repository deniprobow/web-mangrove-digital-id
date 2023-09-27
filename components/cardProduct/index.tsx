import Link from "next/link"

interface CardProductProps {
    id_pesan_tanam: number,
    nama_pemesan: string,
    lokasi_penanaman: string,
    jumlah_tanam: number,
    image: string
}

export const CardProduct = ({id_pesan_tanam, nama_pemesan, lokasi_penanaman, jumlah_tanam, image, ...props}:CardProductProps) => {
    return (
        <div className="card-product h-100">
            <div className="card-product--frame-img">
                <img src={image} alt="" />
            </div>
            <div className="card-product--text">
                <label className="label label__main">{jumlah_tanam} bibit</label>
                <Link href={`plantation/detail/${id_pesan_tanam}`}>{nama_pemesan}</Link>
                <span>{lokasi_penanaman}</span>
            </div>
        </div>
    )
}