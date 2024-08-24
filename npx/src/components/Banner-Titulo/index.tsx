import React from "react";
import './styles.css' 
import Image from '../../assets/img/battle.png';
import Image2 from '../../assets/img/gow.png';  

const index: React.FC = () => {
    return(
        <section>
            <div className="container">  
                <h1>GOD OF WAR: RAGNAROK</h1>
                    <div className="ratings">
                        <div className="rating">
                            <span>Avaliação da Ratings</span>
                            <span>⭐ 9,6/10</span>
                        </div>
                        <div className="rating">
                            <span>Sua Avaliação</span>
                            <span>⭐ Avaliar</span>
                        </div>
                    </div>
            </div>
            <div className="imagem">
                <img className="gow" src={Image2} alt="" />
                <img className="battle" src={Image} alt="" />
            </div>
        </section>

    );
};


export default index;