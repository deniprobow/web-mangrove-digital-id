/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import styles from "../styles/cardtestimonial.module.css";

interface CardTestimonialProps{
    className:string,
    groupClassName:string,
    divClassName:string,
    divClassNameOverride:string,
    groupClassNameOverride:string,
    ellipseClassName:string,
    johnDoeAlphaClassName:string,
    text:React.ReactNode | null,
    icon : React.ReactNode | null,
    spanClassName:string,
    text1:string | null
}

export const CardTestimonial = ({
  className,
  groupClassName,
  divClassName,
  divClassNameOverride,
  groupClassNameOverride,
  ellipseClassName,
  johnDoeAlphaClassName,
  text,
  icon,
  spanClassName,
  text1 = "Alpha Company",
...props}:CardTestimonialProps) => {
  return (
    <div className={`card-testimonial ${className}`}>
      <div className={`group ${groupClassName}`}>
        <p className={`p ${divClassName}`}>
          Digital Mangrove has been an absolute game-changer for our business. Their expertise in digital marketing and
          web development helped us establish a strong online presence and reach our target audience effectively. Their
          innovative strategies and creative approach have significantly boosted our brand visibility and engagement.
        </p>
        <p className={`text-wrapper-2 ${divClassNameOverride}`}>{icon}</p>
      </div>
      <div className={`group-2 ${groupClassNameOverride}`}>
        <div className={`ellipse-2 ${ellipseClassName}`} />
        <p className={`john-doe-alpha ${johnDoeAlphaClassName}`}>
          <span className="span">{text}</span>
          <span className={`text-wrapper-3 ${spanClassName}`}>{text1}</span>
        </p>
      </div>
    </div>
  );
};

CardTestimonial.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
