
import btnLike from '../../assets/img/btnLike.svg'
import btnDeslike from '../../assets/img/btnDeslike.svg'
import btnOptions from '../../assets/img/btnOptions.svg'
import iconStar from '../../assets/img/IconStarFull.svg'
import './styles.css'


const Destaque1 = () => {
    return (
        <div className="avaliacao">
            <div className="avaliacaoLinhaUm">
                <h1>AVALIAÇÃO EM DESTAQUE</h1>
                <span>
                    <img src={iconStar} alt="" />
                    <h1>10/10</h1>
                </span>
            </div>
            <div className="avaliacaoLinhaDois">
                <p style={{ color: '#D5224E' }}>CaioHalbert</p>
                <p style={{color: '#787B81'}}>8 de novembro de 2022</p>
            </div>
            <div className="tituloAvaliacao">
                <h1>What an incredible sequel!</h1>
            </div>
            <div className="textoAvaliacao">
                A fantastic and strong continuation of its predecessor, God of War Ragnarök is not afraid to take unexpected turns, or slow its pace for you to fully explore an environment. It has the same upgrading system as before, but with better armor, in my opinion. Atreus is a little bit older now and it's so great to see everybody reprise their magnificent roles.<br></br>

                I don't want to give away too much in this review, but it's definitely worth buying. One of the best looking games on PS5. It'll definitely be a game of the year contender with Elden Ring. If you're new to the series, I recommend you start with God of War (2018) If you have the dedication, you could always start from the very first one. They're all on the PS+ collection. I still have yet to beat this newest entry, but I wanted to spread the good word as soon as possible: Ragnarok is here and it is beautiful.
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

export default Destaque1;