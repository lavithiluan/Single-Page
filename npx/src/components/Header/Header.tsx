import React from 'react';
import Logo from '../../assets/img/image.png';
import './styles.css';

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="Ratings Logo" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <div className="menu-icon">
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                    <div className="bar"></div>
                                </div>
                                MENU
                            </a>
                        </li>
                        <li><input type="search" placeholder="Search" /></li>
                        <li><a href="#" className="login">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;