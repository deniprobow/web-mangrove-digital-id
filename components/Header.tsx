import Link from "next/link";
import "../styles/header.module.css";

interface HeaderProps{
    className:string,
    mangroveDigitalClassName:string,
    ellipseClassName:string,
    divClassName:string,
    divClassNameOverride:string,
    divClassName1:string,
    divClassName2:string,
    divClassName3:string,
    divClassName4:string,
}

export const Header = ({
  className,
  mangroveDigitalClassName,
  ellipseClassName,
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
  divClassName3,
  divClassName4,
  ...props}:HeaderProps) => {
  return (
    <div className={`header ${className}`}>
      <div className="logo">
        <div className={`mangrove-digital ${mangroveDigitalClassName}`}>
          Mangrove
          <br />
          DIgital
        </div>
        <div className={`ellipse ${ellipseClassName}`} />
      </div>
      <div className="div">
        <Link href={""} className={`text-wrapper ${divClassName}`}>Home</Link>
        <Link href={""} className={`text-wrapper ${divClassNameOverride}`}>About Us</Link>
        <Link href={""} className={`text-wrapper ${divClassName1}`}>Products</Link>
        <Link href={""} className={`text-wrapper ${divClassName1}`}>Penanaman</Link>
        <Link href={""} className={`text-wrapper ${divClassName2}`}>Blogs</Link>
        <Link href={""} className={`text-wrapper ${divClassName3}`}>Gallery</Link>
        <Link href={""} className={`text-wrapper ${divClassName4}`}>Contact</Link>
      </div>
    </div>
  );
};
