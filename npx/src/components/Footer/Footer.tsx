import React from "react";
import '../Footer/style.css'
import Logo from '../../assets/img/image.png';


const Footer: React.FC = () => {
    return (
      <footer>
        <div className="container">
          <div className="logo">
              <img src={Logo} alt="Logo" />
          </div>
          <div className="links">
          <div className="footer-links">
           <a href="#">Company</a>
           <a href="#">About Us</a>
            <a href="#">Partnerships</a>
            <a href="#">FAQ</a>
          </div>
          <div className="footer-links">
            <a href="#">Company</a>
            <a href="#">About Us</a>
            <a href="#">Partnerships</a>
            <a href="#">FAQ</a>
          </div>
          <div className="footer-links">
            <a href="#">Company</a>
            <a href="#">About Us</a>
            <a href="#">Partnerships</a>
            <a href="#">FAQ</a>
          </div>
          </div>
        </div>
      </footer>
     );
};
        
export default Footer;