import { Breadcrumb } from "@/components/breadcrumb/style"

export default function Photo() {
    const breadcrumbLinks = [
        {
            name : 'Home',
            url : '/home'
        },{
            name : 'Album',
            url : '/album'
        }
    ]

    return (
        <>
            <Breadcrumb
                title = "Photo Album 1"
                links = {breadcrumbLinks}
            />

            <main className="main-wrapper">
                <div className="container"></div>
            </main>
        </>
    )
}