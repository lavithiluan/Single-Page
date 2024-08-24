
import btnLike from '../../assets/img/btnLike.svg'
import btnDeslike from '../../assets/img/btnDeslike.svg'
import btnOptions from '../../assets/img/btnOptions.svg'
import iconStar from '../../assets/img/IconStarFull.svg'
import iconArrowDown from '../../assets/img/iconArrowDown.svg'
import './style.css'


const Destaque2 = () => {
    return (
        <div style={{marginTop: '35px'}} className="avaliacao">
            <div className="avaliacaoLinhaUm">
                <h1>AVALIAÇÃO EM DESTAQUE</h1>
                <span>
                    <img src={iconStar} alt="" />
                    <h1>10/10</h1>
                </span>
            </div>
            <div className="avaliacaoLinhaDois">
                <p style={{ color: '#D5224E' }}>ClaudiaRayara</p>
                <p style={{color: '#787B81'}}>14 de novembro de 2022</p>
            </div>
            <div className="tituloAvaliacao">
                <h1>This game took part of my soul...</h1>
            </div>
            <div className="spoilerAlert">
                <p>Warning: Spoilers!</p>
                <img src={iconArrowDown} alt="" />
            </div>
            <div className="footerAvaliacao">
                <div className="buttons">
                    <span className='like'>
                        <img src={btnLike} alt="" />
                        <p>25</p>

                    </span>
                    <span className="deslike">
                        <img src={btnDeslike} alt="" />
                        <p>3</p>
                    </span>
                </div>
                <img src={btnOptions} alt="" />

            </div>
        </div>

    );
}

export default Destaque2;