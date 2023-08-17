import { Header } from "@/components/Header"
import { Frame } from "@/components/Frame"
import { CardTestimonial } from "@/components/CardTestimonial"
import "../styles/index.module.css"
import "../styles/header.module.css"
import "../styles/frame.module.css"
import "../styles/cardtestimonial.module.css"
import { FaStar, FaChevronLeft, FaChevronRight, FaGooglePlay } from 'react-icons/fa';
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    
    <main className="index">
      <div className="div-2">
        <div className="div-3">
          <div className="div-3">
            <div className="overlap-group">
              <p className="text-wrapper-4">Mangrove Digital : Menanam Mangrove, Menyelamatkan Bumi</p>
            </div>
          </div>
          <Header
            className="header-instance"
            divClassName="text-wrapper-5"
            divClassName1="text-wrapper-5"
            divClassName2="text-wrapper-5"
            divClassName3="text-wrapper-5"
            divClassName4="text-wrapper-5"
            divClassNameOverride="text-wrapper-5"
            ellipseClassName="design-component-instance-node"
            mangroveDigitalClassName="text-wrapper-5"
          />
        </div>
        <div className="frame-2">
          <img
            className="rectangle"
            alt="Rectangle"
            height="92px"
            width="auto"
            src="/img/akcaya.png"
          />
          <img
            className="rectangle"
            alt="Rectangle"
            height="92px"
            width="auto"
            src="/img/brgm.png"
          />
          <img
            className="rectangle"
            alt="Rectangle"
            height="92px"
            width="auto"
            src="/img/mowilex.png"
          />
          <img
            className="rectangle"
            alt="Rectangle"
            width="auto"
            height="92px"
            src="/img/bpdas.png"
          />
          <img
            className="rectangle"
            alt="Rectangle"
            height="92px"
            width="auto"
            src="/img/pemuda.png"
          />
        </div>
        <div className="about-us">
          <div className="group-3">
            <p className="in-the-vast-expanse">
              In the vast expanse of the digital world, the concept of a &#34;Digital Mangrove&#34; has emerged as an
              intriguing analogy. Just like the intricate ecosystem of a mangrove forest that plays a pivotal role in
              supporting diverse marine life, the digital mangrove symbolizes the virtual spaces that foster and sustain
              a multitude of online activities, connections, and experiences. Let&#39;s dive into the captivating realm
              of the digital mangrove and uncover its significance in our modern age.
            </p>
            <p className="text-wrapper-6">Mangrove Digital : All About Us and Our History</p>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <img
                className="beautiful-scenery"
                alt="Beautiful scenery"
                src="/img/about-us-2.webp"
              />
              <img
                className="rectangle-3"
                alt="Rectangle"
                src="/img/about-us-1.webp"
              />
            </div>
          </div>
        </div>
        <div className="services">
          <div className="overlap">
            <p className="exploring-the">
              Exploring Our Services
              <br />
              For Save The World
            </p>
            <Frame
              className="frame-3"
              divClassName="frame-instance"
              divClassNameOverride="text-wrapper-5"
              ecosystem="https://anima-uploads.s3.amazonaws.com/projects/617087b8364771166bbbfbf6/releases/64de4d9d71b04b3a4bbaae17/img/ecosystem-1@2x.png"
              text="Order Plantation"
              text1="The digital mangrove is characterized by its rich diversity of content. From blog posts to videos, podcasts to memes, it hosts a plethora of multimedia elements that cater to a wide range of interests. This dynamic environment allows creators to showcase their talents"
            />
            <Frame
              className="frame-3-instance"
              divClassName="frame-instance"
              divClassNameOverride="text-wrapper-5"
              ecosystem="https://anima-uploads.s3.amazonaws.com/projects/617087b8364771166bbbfbf6/releases/64de4d9d71b04b3a4bbaae17/img/ecosystem-1-1@2x.png"
              text="Order Seeds"
              text1="The digital mangrove is characterized by its rich diversity of content. From blog posts to videos, podcasts to memes, it hosts a plethora of multimedia elements that cater to a wide range of interests. This dynamic environment allows creators to showcase their talents"
            />
            <Frame
              className="frame-4"
              divClassName="frame-instance"
              divClassNameOverride="text-wrapper-5"
              ecosystem="https://anima-uploads.s3.amazonaws.com/projects/617087b8364771166bbbfbf6/releases/64de4d9d71b04b3a4bbaae17/img/ecosystem-1-2@2x.png"
              text="Restore Carbons"
              text1="Just as mangroves have evolved to thrive in harsh coastal environments, the digital mangrove demonstrates a remarkable ability to adapt. Trends come and go, platforms evolve, and user behaviors change In this ever-evolving ecosystem, content creators and digital entities must stay nimble"
            />
          </div>
        </div>
        <div className="testimonial">
          <div className="heading">
            <div className="group-4">
              <div className="public-figure-said">
                Public Figure
                <br />
                Said About Us
              </div>
              <p className="text-wrapper-7">
                the concept of the digital mangrove serves as a captivating analogy that mirrors the intricate interplay
                of connectivity, diversity, adaptation, and preservation in our online world.
              </p>
              <div className="group-5">
                <div className="div-wrapper">
                  <div className="text-wrapper-8"><FaChevronRight /></div>
                </div>
                <div className="frame-5">
                  <div className="text-wrapper-8"><FaChevronLeft /></div>
                </div>
              </div>
              <div className="text-wrapper-9">1 / 4</div>
            </div>
          </div>
          <div className="frame-6">
            <div className="group-6">
              <p className="text-wrapper-10">
                Digital Mangrove has been an absolute game-changer for our business. Their expertise in digital
                marketing and web development helped us establish a strong online presence and reach our target audience
                effectively. Their innovative strategies and creative approach have significantly boosted our brand
                visibility and engagement.
              </p>
              <p className="text-wrapper-11"><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></p>
            </div>
            <div className="group-7">
              <img
                className="ellipse-3"
                alt="Ellipse"
                src="https://anima-uploads.s3.amazonaws.com/projects/617087b8364771166bbbfbf6/releases/64de4d9d71b04b3a4bbaae17/img/ellipse-3@2x.png"
              />
              <p className="h-sutarmidji">
                <span className="text-wrapper-12">
                  H. Sutarmidji
                  <br />
                </span>
                <span className="text-wrapper-13">Gubernur Kalbar</span>
              </p>
            </div>
          </div>
          <CardTestimonial
            className="card-testimonial-instance"
            divClassName="text-wrapper-5"
            divClassNameOverride="card-testimonial-3"
            ellipseClassName="card-testimonial-5"
            groupClassName="card-testimonial-2"
            groupClassNameOverride="card-testimonial-4"
            johnDoeAlphaClassName="text-wrapper-5"
            spanClassName="text-wrapper-5"
            icon={
              <>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              </>
            }
            text={
              <>
                Sandiaga Uno
                <br />
              </>
            }
            text1="Mentri Pariwisata"
          />
        </div>
        <div className="download">
          <div className="group-8">
            <div className="download-aplikasi">
              Download Aplikasi
              <br />
              Mangrove Digital
            </div>
            <div className="frame-7">
              <div className="text-wrapper-14"><FaGooglePlay/></div>
              <div className="text-wrapper-15">Playstore</div>
            </div>
          </div>
          <div className="group-9">
            <div className="overlap-group-3">
              <img
                className="group-10"
                alt="Group"
                src="https://anima-uploads.s3.amazonaws.com/projects/617087b8364771166bbbfbf6/releases/64de4d9d71b04b3a4bbaae17/img/group-4-2.png"
              />
              <img
                className="group-11"
                alt="Group"
                src="https://anima-uploads.s3.amazonaws.com/projects/617087b8364771166bbbfbf6/releases/64de4d9d71b04b3a4bbaae17/img/group-4-3.png"
              />
              <img
                className="group-12"
                alt="Group"
                src="https://anima-uploads.s3.amazonaws.com/projects/617087b8364771166bbbfbf6/releases/64de4d9d71b04b3a4bbaae17/img/group-4-1.png"
              />
            </div>
          </div>
        </div>
        <Footer 
          footerAboutTitle="Mangrove Digital" 
          footerAboutDesc="Desa Sungai Kupah Kecamatan Sungai Kakap Kabupaten Kubu Raya, Provinsi Kalimantan Barat, Indonesia" 
          footerCopyright="© 2023 Mangrove Digital. All Right Reserved" />
      </div>
    </main>

  )
}
