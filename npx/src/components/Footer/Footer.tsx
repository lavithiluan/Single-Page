import React from "react";
import '../Footer/style.css'
import Logo from '../../assets/img/image.png';


const Footer: React.FC = () => {
    return (
      <footer>
            <img src={Logo} alt="" />
            <div className="navigationFooter">
                <div className="column">
                    <h3>COMPANY</h3>
                    <a href="#">About Us</a>
                    <a href="#">Partnerships</a>
                    <a href="#">FAQ</a>
                </div>
                <div className="column">
                    <h3>COMPANY</h3>
                    <a href="#">About Us</a>
                    <a href="#">Partnerships</a>
                    <a href="#">FAQ</a>
                </div>
                <div className="column">
                    <h3>COMPANY</h3>
                    <a href="#">About Us</a>
                    <a href="#">Partnerships</a>
                    <a href="#">FAQ</a>
                </div>
            </div>
        </footer>
     );
};
        
export default Footer;