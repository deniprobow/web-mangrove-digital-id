import { Breadcrumb } from '@/components/breadcrumb/style'
import { CardGallery } from '@/components/CardGallery'
import { useRouter } from 'next/router'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

export default function DetailALbum() {
    const router = useRouter()

    type dataType = {
        link : string,
        img : string,
        title : string,
        metas : {
            text : string
        }[]
    }

    const breakPoints = {
        575 : 1,
        768 : 2,
        992 : 3
    }

    const breadcrumbLinks = [
        {
            name : 'Home',
            url : '/home'
        },{
            name : 'Album Documentation',
            url : '/album'
        },{
            name : 'Photo of Album',
            url : '/album/detail/' + router.query.id
        }
    ]

    const datas = [
        {
            link : '/img/album/album-cover-1.webp',
            img : '/img/album/album-cover-1.webp',
            title : 'Photo 1',
            metas : [
                {
                    text : 'August 31, 2023'
                }
            ]
        },{
            link : '/img/album/album-cover-2.webp',
            img : '/img/album/album-cover-2.webp',
            title : 'Photo 2',
            metas : [
                {
                    text : 'August 31, 2023'
                }
            ]
        },{
            link : '/img/album/album-cover-3.webp',
            img : '/img/album/album-cover-3.webp',
            title : 'Photo 3',
            metas : [
                {
                    text : 'August 31, 2023'
                }
            ]
        }
    ]

    return (
        <>
            <Breadcrumb
                title = "Photo of Album"
                links = {breadcrumbLinks}
            />
            <main className="main-wrapper">
                <div className="container">
                    <ResponsiveMasonry columnsCountBreakPoints={breakPoints}>
                        <Masonry gutter="24px">
                            {
                                datas &&
                                datas.map((data:dataType) => {
                                    return (
                                        <CardGallery
                                            link = {data.link}
                                            img = {data.img}
                                            title = {data.title}
                                            metas = {data.metas}
                                        />
                                    )
                                })
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </main>
        </>
    )
}
