import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './components/Banner-Titulo/'
import Enredo from './components/Enredo/'
import MediaQuerie from './components/MediaQuerie/'
import Avaliacoes from './components/Avaliação';


function App() {
  return (
    <>
      <MediaQuerie/>
      <main>
      <Header />
      <Banner />
      <Enredo />
      <Avaliacoes />
      <Footer />
      </main>
    </>
  );
};

export default App