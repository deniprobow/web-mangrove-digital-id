import { Header } from '@/components/header'
import { Loading } from '@/components/Loading'
import { Breadcrumb } from '@/components/breadcrumb/style'
import { FormEvent, useEffect, useState } from 'react'
import useSWRMutation from 'swr/mutation'

export default function Donation() {
    let [price, setPrice] = useState(0)

    type dataPostPesanTanam = {
        nama_pemesan: string,
        lokasi_penanaman: string,
        koordinat_penanaman: string,
        jumlah_tanam: number,
        status_pembayaran: string,
    }

    useEffect(() => {
        const snapSrcUrl:string = 'https://app.sandbox.midtrans.com/snap/snap.js'
        const myMidtransClientKey:string = `${process.env.NEXT_PUBLIC_CLIENT_KEY}`
        
        const script = document.createElement('script')
        script.src = snapSrcUrl
        script.setAttribute('data-client-key', myMidtransClientKey)
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const handleGetPrice = (e:any) => {
        setPrice(e.target.value*500)
    }
    
    const fetcher = (url:string, args:any) => {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(args)
        })
    }

    async function handleSubmit(event:any) {
        try{
            const formData = new FormData()
            formData.append('nama_pemesan', event.target.nama_pemesan.value)
            console.log(formData)

            event.preventDefault()
        } catch (error) {
            console.log(error)
        }
    }

    function snapPay(e:any) {
        // snap.pay('bffb82ff-f8bb-4651-86b0-0c2316b77c0a')
        e.preventDefault()
    }

    const breadcrumbLinks = [
        {
            name : 'home',
            url : '/home'
        },{
            name : 'Donate Us',
            url : '/donation'
        }
    ]

    return (
        <>
            <Header isHomePage={false} />
            <Breadcrumb
                title = "Donate Us"
                links = {breadcrumbLinks}
            />
            <main className="main-wrapper bg-grey">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="card card-order">
                                <div className="card-header">
                                    <h4 className="font-weight-bolder mb-0">Form Order</h4>
                                </div>
                                <div className="card-body">
                                    <form action="" onSubmit={handleSubmit}>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="inputNamaPemesan" placeholder="Nama pemesan" name="nama_pemesan"/>
                                            <label htmlFor="inputNamaPemesan">Nama pemesan</label>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email"/>
                                                    <label htmlFor="inputEmail">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="input phone" placeholder="Phone / Whatsapp" />
                                                    <label htmlFor="input phone">Phone / Whatsapp</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <select className="form-select" id="inputJenisDonasi">
                                                <option value="1">Pesan Tanam</option>
                                                <option value="2">Pesan Bibit</option>
                                                <option value="3">Pemeliharaan Carbon</option>
                                            </select>
                                            <label htmlFor="inputJenisDonasi">Pilih jenis donasi</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="inputLokasiPesanTanam" placeholder="Lokasi pesan tanam" />
                                            <label htmlFor="inputLokasiPesanTanam">Lokasi pesan tanam</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="inputAlamatPemesan" placeholder="Alamat pemesan" />
                                            <label htmlFor="inputAlamatPemesan">Alamat pemesan</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="date" className="form-control" id="inputTanggalPemesanan" placeholder="Tanggal pemesanan" />
                                            <label htmlFor="inputTanggalPemesanan">Tanggal pemesanan</label>
                                        </div>
                                        <div className="row pb-3">
                                            <div className="col-lg-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="number" className="form-control" id="inputJumlahBibitDipesan" placeholder="Jumlah bibit dipesan" onChange={handleGetPrice}/>
                                                    <label htmlFor="inputJumlahBibitDipesan">Jumlah bibit dipesan</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="inputSisaStok" placeholder="Sisa stok" />
                                                    <label htmlFor="inputSisaStok">Sisa stok</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="alert alert-primary mb-5 fw-bold">Jumlah Pembayaran : Rp. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00</div>
                                        <button type="submit" className="btn btn__main">Pesan</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}