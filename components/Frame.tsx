/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import "../styles/frame.module.css";

interface FrameProps{
    className:string,
    ecosystem:string,
    divClassName:string,
    divClassNameOverride:string,
    text:string | null,
    text1:string | null
}

export const Frame = ({
  className,
  ecosystem = "https://anima-uploads.s3.amazonaws.com/projects/617087b8364771166bbbfbf6/releases/64de4d9d71b04b3a4bbaae17/img/ecosystem-1-3@2x.png",
  divClassName,
  divClassNameOverride,
  text = "The Ecosystem of Connectivity",
  text1 = "Much like the tangled roots of mangrove trees interweaving to form a stable foundation, the digital mangrove thrives on connectivity. It encompasses social media platforms, websites, forums, and various online communities that intertwine to create a vast network.",
...props}:FrameProps) => {
  return (
    <div className={`frame ${className}`}>
      <img className="ecosystem" alt="Ecosystem" src={ecosystem} />
      <div className={`the-ecosystem-of ${divClassName}`}>{text}</div>
      <p className={`much-like-the ${divClassNameOverride}`}>{text1}</p>
    </div>
  );
};

Frame.propTypes = {
  ecosystem: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
