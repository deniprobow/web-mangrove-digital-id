import { Breadcrumb } from '@/components/breadcrumb/style'
import { CardPerson } from '@/components/cardPerson'
import { Loading } from '@/components/Loading'

export default function PrivacyPolicy() {
    type dataType = {
        id : number,
        name : string,
        position : string,
        img  : string
    }

    const breadcrumbLinks = [
        {
            name : 'home',
            url : '/home'
        },{
            name : 'Privacy Policy ',
            url : '/privacy-policy'
        }
    ]

    const datas = [
        {
            id : 1,
            name : 'Sonny Houston',
            position : 'Founder',
            img : 'https://randomuser.me/api/portraits/men/97.jpg'
        },{
            id : 2,
            name : 'Enya Cummings',
            position : 'Co Founder',
            img : 'https://randomuser.me/api/portraits/women/79.jpg'
        },{
            id : 3,
            name : 'Sarah Humphrey',
            position : 'Chief Executive Officer',
            img : 'https://randomuser.me/api/portraits/women/63.jpg'
        },{
            id : 4,
            name : 'Veronica Cole',
            position : 'Chief Operation Officer',
            img : 'https://randomuser.me/api/portraits/women/8.jpg'
        },{
            id : 5,
            name : 'Mohamed Krueger',
            position : 'Chief Technology Officer',
            img : 'https://randomuser.me/api/portraits/men/22.jpg'
        },{
            id : 6,
            name : 'Mason Grimes',
            position : 'Chief Marketing Officer',
            img : 'https://randomuser.me/api/portraits/men/4.jpg'
        }
    ]
    return (
        <>
            <Loading />
            <Breadcrumb
                title = "Privay Policy"
                links = {breadcrumbLinks}
            />
            <main className="main-wrapper">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-lg-12 offset-lg-1 about-us--side-text">
                        <h1 className='h-section'>Privacy Policy for Mangrove Digital</h1>
                        <p>At Mangrove Digital, accessible from https://mangrovedigital.id, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Mangrove Digital and how we use it.</p>
                        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                        <h2>Log Files</h2>
                        <p>Mangrove Digital follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">Privacy Policy Generator</a>.</p>
                        <h2>Cookies and Web Beacons</h2>
                        <p>Like any other website, Mangrove Digital uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
                        <p>For more general information on cookies, please read <a href="https://www.privacypolicyonline.com/what-are-cookies/">the "Cookies" article from the Privacy Policy Generator</a>.</p>
                        <h2>Privacy Policies</h2>
                        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Mangrove Digital.</p>
                        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Mangrove Digital, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                        <p>Note that Mangrove Digital has no access to or control over these cookies that are used by third-party advertisers.</p>
                        <h2>Third Party Privacy Policies</h2>
                        <p>Mangrove Digital's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
                        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>
                        <h2>Children's Information</h2>
                        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                        <p>Mangrove Digital does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                        <h2>Online Privacy Policy Only</h2>
                        <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Mangrove Digital. This policy is not applicable to any information collected offline or via channels other than this website.</p>
                        <h2>Consent</h2>
                        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}