import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Img01 from './assets/imgs/01.jpg';
import Img02 from './assets/imgs/02.jpg';
import Img03 from './assets/imgs/03.jpeg';
function App() {
  return (

    <div>
          <NavBar/>
          <br/>
      <div className="App cards">
      <ItemListContainer
      producto='Llavero Loli'
      img={Img01}
      descripcion='Realiza un llavero personalizado de tu mascota.'/>
        <ItemListContainer
      producto='Llavero Kimba'
      img={Img02}
      descripcion='Realiza un llavero personalizado de tu mascota.'/>
       <ItemListContainer
      producto='Escritorio'
      img={Img03}
      descripcion='Escritorio de madera bambu.'/>
         </div>
       
    </div>
  );
}

export default App;