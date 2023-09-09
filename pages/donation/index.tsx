import { useState } from 'react'
import { Loading } from '@/components/Loading'
import { Breadcrumb } from '@/components/breadcrumb/style'

export default function Donation() {
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
            <Loading />
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
                                    <form action="">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="inputNamaPemesan" placeholder="Nama pemesan" />
                                            <label htmlFor="inputNamaPemesan">Nama pemesan</label>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
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
                                                    <input type="text" className="form-control" id="inputJumlahBibitDipesan" placeholder="Jumlah bibit dipesan" />
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