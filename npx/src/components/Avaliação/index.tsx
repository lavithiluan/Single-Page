import './styles.css'
import iconArrow from '../../assets/img/iconArrow.svg'
import iconMais from '../../assets/img/iconMais.svg'
import Destaque1 from '../Destaque1';
import Destaque2 from '../Destaque2';

const Avaliacoes = () => {
    return (
        <section className='avaliacoes'>
            <div className="headerAvaliacoes">
                <div className="imagemEtitulo">
                    <img src={iconArrow} alt="" />
                    <h1>AVALIAÇÃO DE USUÁRIO</h1>
                </div>
                <div className='avaliar'>
                    <img src={iconMais} alt="" />
                    <h1>Avaliar</h1>
                </div>
            </div>
            <Destaque1 />
            <Destaque2/>
        </section>
    );
}

export default Avaliacoes;