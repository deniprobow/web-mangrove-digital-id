import { Breadcrumb } from '@/components/breadcrumb/style/Breadcrumb'
import { CardGallery } from '@/components/CardGallery'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

export default function Album() {
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
        }
    ]

    const datas = [
        {
            link : '/photo',
            img : '/img/album/album-cover-1.webp',
            title : 'Album 1',
            metas : [
                {
                    text : 'August 31, 2023'
                },{
                    text : '4 photos'
                }
            ]
        },{
            link : '/photo',
            img : '/img/album/album-cover-2.webp',
            title : 'Album 2',
            metas : [
                {
                    text : 'August 31, 2023'
                },{
                    text : '4 photos'
                }
            ]
        },{
            link : '/photo',
            img : '/img/album/album-cover-3.webp',
            title : 'Album 3',
            metas : [
                {
                    text : 'August 31, 2023'
                },{
                    text : '4 photos'
                }
            ]
        },{
            link : '/photo',
            img : '/img/album/album-cover-4.webp',
            title : 'Album 4',
            metas : [
                {
                    text : 'August 31, 2023'
                },{
                    text : '4 photos'
                }
            ]
        }
    ]

    return (
        <>
            <Breadcrumb
                title = "Album Documentation"
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