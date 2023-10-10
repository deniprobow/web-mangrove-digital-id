type DataPesanTanam = {
    id_pesan_tanam: number,
    nama_pemesan: string,
    jenis_tanaman: string,
    lokasi_penanaman: string,
    koordinat_penanaman: string,
    waktu_penanaman: string,
    jumlah_tanam: number,
    status_pembayaran: string,
    nilai_pembayaran: number,
    waktu_pembayaran: string,
    default_price: string,
    current_price: string,
    user_id: string
}

type Timeline = {
    id_timeline_pesan_tanam: number,
    id_pesan_tanam: number,
    foto_timeline_pesan_tanam: string,
    tgl_timeline_pesan_tanam: string,
    keterangan_timeline_pesan_tanam: string
}