import "./footer.css";
import { IoIosAdd, IoLogoWhatsapp } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer-site">

      <ul className="container-icons">
        <li>
          <IoLogoWhatsapp color="red" size={35} />{" "}
        </li>
        <li>
          <IoLogoTwitter color="red" size={35} />{" "}
        </li>
        <li>
          <IoLogoFacebook color="red" size={35} />{" "}
        </li>
      </ul>

      <img src="images/yoursongsLogo.svg" alt="Logo do site Yoursongs" size={50}/>

        <h3>Desenvolvido por <strong>Miderson Camargo</strong></h3>
    </footer>
  );
};

export default Footer;
