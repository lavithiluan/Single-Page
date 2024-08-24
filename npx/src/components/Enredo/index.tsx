import './style.css'
import iconArrow from '../../assets/img/iconArrow.svg'

const Enredo = () => {
  return (
    <section className='enredo'>
        <div className="tituloSection">
            <img src={iconArrow} alt="" />
            <h1>ENREDO</h1>
        </div>
        <p>
        Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.
        </p>
    </section>
  );
}

export default Enredo;