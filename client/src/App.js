import './App.css';
import {Routes,Route, useLocation} from "react-router-dom"
import Nav from './Components/Nav/Nav';
import Inicio from './Views/LandingPage/inicio';
import Home from './Views/Home/home';
import About from './Views/About/About';
import Detail from './Views/CountryDetail/Detail';
import Form  from './Views/Form/Form';
import Footer from './Components/Footer/Footer';

function App() {
  const location= useLocation();

  return (
    <div className="containerApp" name="ContainerApp" key="App">

  {location.pathname !== "/" && <Nav  />} 

      <Routes>
      <Route exact path="/" element={<Inicio/>} name="Rout" key="Rout"></Route>
      <Route path ="/home" element={<Home/>} name="RoutHome" key="RoutHome"></Route>
      <Route path ="/about" element={<About/>} name="RoutAbout" key="RoutAbout"></Route>
      <Route path ="/detail/:id" element={<Detail/>} name="RoutDetail" key="RoutDetail"></Route>
      <Route path ="/create" element={<Form/>} name="RoutForm" key="RoutForm"></Route>
      </Routes>

  {location.pathname !== "/" && <Footer />} 
    </div>
  );
}


export default App;
