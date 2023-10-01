import { Header } from '@/components/header'
import { Loading } from '@/components/Loading'
import { Breadcrumb } from '@/components/breadcrumb/style'
import { FormEvent, useEffect, useState } from 'react'
import useSWRMutation from 'swr/mutation'
import axios from 'axios'

export default function Donation() {
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [jenisDonasi, setJenisDonasi] = useState('')
    const [lokasiTanam, setLokasiTanam] = useState('')
    const [jumlahItem, setJumlahItem] = useState(0)
    const [sisaStok, setSisaStok] = useState(0)
    const [jumlahPembayaran, setJumlahPembayaran] = useState(0)

    const breadcrumbLinks = [
        {
            name : 'home',
            url : '/home'
        },{
            name : 'Donate Us',
            url : '/donation'
        }
    ]
    
    interface interfaceBodyPesanTanam {
        nama_pemesan: string,
        jenis_tanaman: string,
        lokasi_penanaman: string,
        koordinat_penanaman: string,
        waktu_penanaman: string,
        jumlah_tanam: number,
        status_pembayaran: string,
        nilai_pembayaran: number,
        waktu_pembayaran: string,
        user_name: string,
        user_email: string,
        user_handphone: string
    }

    const bodyPesantanam:interfaceBodyPesanTanam = {
        nama_pemesan: nama,
        jenis_tanaman: '',
        lokasi_penanaman: lokasiTanam,
        koordinat_penanaman: '',
        waktu_penanaman: '',
        jumlah_tanam: jumlahItem,
        status_pembayaran: 'pending',
        nilai_pembayaran: jumlahPembayaran,
        waktu_pembayaran: '',
        user_name: '',
        user_email: email,
        user_handphone: phone
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

    function snapPay(e:any) {
        snap.pay('bffb82ff-f8bb-4651-86b0-0c2316b77c0a')
        e.preventDefault()
    }

    async function handleSubmitForm(event:any) {
        event.preventDefault()

        //save data to db
        console.log(JSON.stringify(bodyPesantanam))

        axios({
            // Below is the API URL endpoint
            url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization:
                "Basic " +
                Buffer.from("SB-Mid-server-mSaN3dhaBRG1avJ-2N0uVFuI").toString("base64")
              // Above is API server key for the Midtrans account, encoded to base64
            },
            data:
              // Below is the HTTP request body in JSON
              {
                transaction_details: {
                  order_id: "order-csb-34534534",
                  gross_amount: 10000
                },
                credit_card: {
                  secure: true
                },
                customer_details: {
                  first_name: "Johny",
                  last_name: "Kane",
                  email: "testmidtrans@mailnesia.com",
                  phone: "08111222333"
                }
              }
          }).then( snapResponse => { 
              let snapToken = snapResponse.data.token;
              console.log("Retrieved snap token:", snapToken);
              // Pass the Snap Token to frontend, render the HTML page
              //res.send(getMainHtmlPage(snapToken, handleMainRequest));
            })

        //do snap pay
        //snap.pay('bffb82ff-f8bb-4651-86b0-0c2316b77c0a')
    }

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
                                    <form action="" onSubmit={handleSubmitForm}>
                                        <div className="form-floating mb-3">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="inputNamaPemesan" 
                                                placeholder="Nama pemesan" 
                                                onChange={(event) => setNama(event?.target.value)} 
                                            />
                                            <label htmlFor="inputNamaPemesan">Nama pemesan</label>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-floating">
                                                    <input 
                                                        type="email" 
                                                        className="form-control" 
                                                        id="inputEmail" 
                                                        placeholder="Email" 
                                                        onChange={(event) => setEmail(event.target.value)} 
                                                    />
                                                    <label htmlFor="inputEmail">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-floating">
                                                    <input 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="input phone" 
                                                        placeholder="Phone / Whatsapp" 
                                                        onChange={(event) => setPhone(event.target.value)} 
                                                    />
                                                    <label htmlFor="input phone">Phone / Whatsapp</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <select 
                                                className="form-select" 
                                                id="inputJenisDonasi" 
                                                onChange={(event) => setJenisDonasi(event.target.value)}
                                            >
                                                <option value="">Pilih jenis donasi</option>
                                                <option value="pesanTanam">Pesan Tanam</option>
                                                <option value="pesanBibit">Pesan Bibit</option>
                                                <option value="pemeliharaanCarbon">Pemeliharaan Carbon</option>
                                            </select>
                                            <label htmlFor="inputJenisDonasi">Jenis donasi</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="inputLokasiPesanTanam" 
                                                placeholder="Lokasi pesan tanam" 
                                                onChange={(event) => setLokasiTanam(event.target.value)} 
                                            />
                                            <label htmlFor="inputLokasiPesanTanam">Lokasi pesan tanam</label>
                                        </div>
                                        <div className="row pb-3">
                                            <div className="col-lg-6 mb-4">
                                                <div className="form-floating">
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        id="inputJumlahBibitDipesan" 
                                                        placeholder="Jumlah bibit dipesan"
                                                        onChange={(event) => setJumlahItem(parseInt(event.target.value))}
                                                    />
                                                    <label htmlFor="inputJumlahBibitDipesan">Jumlah bibit dipesan</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="form-floating">
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        id="inputSisaStok" 
                                                        placeholder="Sisa stok"
                                                        onChange={(event) => setSisaStok(parseInt(event.target.value))} 
                                                    />
                                                    <label htmlFor="inputSisaStok">Sisa stok</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="alert alert-primary mb-5 fw-bold">Jumlah Pembayaran : Rp. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00</div> */}
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