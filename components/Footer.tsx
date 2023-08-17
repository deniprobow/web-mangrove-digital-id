interface footerProps{
    footerCopyright : string,
    footerAboutTitle: string,
    footerAboutDesc: string,
}
export const Footer = ({footerCopyright,footerAboutTitle, footerAboutDesc,...props}:footerProps) =>{
    return (
        <footer className="footer">
          <div className="overlap-2">
            <div className="frame-8">
              <p className="text-wrapper-16">{footerCopyright}</p>
            </div>
            <div className="group-13">
              <div className="text-wrapper-17">{footerAboutTitle}</div>
              <p className="text-wrapper-18">
                {footerAboutDesc}
              </p>
            </div>
            <p className="site-map-about-us">
              <span className="text-wrapper-19">
                Site Map
                <br />
              </span>
              <span className="text-wrapper-5">
                About Us
                <br />
                Services
                <br />
                Blogs
                <br />
                Contact
              </span>
            </p>
            <p className="legal-term-and">
              <span className="text-wrapper-19">
                Legal
                <br />
              </span>
              <span className="text-wrapper-5">
                Term and Condition
                <br />
                Cookies and Policy
                <br />
                Privacy Policy
                <br />
                Affiliate Agreement
              </span>
            </p>
            <p className="follow-us-mangrove">
              <span className="text-wrapper-19">
                Follow Us
                <br />
              </span>
              <span className="text-wrapper-20">&nbsp;&nbsp;</span>
              <span className="text-wrapper-5">
                Mangrove Digital
                <br />
              </span>
              <span className="text-wrapper-20">&nbsp;&nbsp;</span>
              <span className="text-wrapper-5">
                Mangrove Digital
                <br />
              </span>
              <span className="text-wrapper-20">&nbsp;&nbsp;</span>
              <span className="text-wrapper-5">
                Mangrove Digital
                <br />
              </span>
              <span className="text-wrapper-20">&nbsp;&nbsp;</span>
              <span className="text-wrapper-5">Mangrove Digital</span>
            </p>
          </div>
        </footer>
    )
}