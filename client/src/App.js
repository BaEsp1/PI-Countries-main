import './App.css';
import {Routes,Route, useLocation} from "react-router-dom"
import Nav from './Components/Nav/Nav';
import Inicio from './Views/LandingPage/inicio';
import Home from './Views/Home/home';
import About from './Views/About/About';
import Detail from './Views/CountryDetail/Detail';
import Form  from './Views/Form/Form';

function App() {
  const location= useLocation();

  return (
    <div className="App">

  {location.pathname !== "/" && <Nav  />} 

      <Routes>
      <Route exact path="/" element={<Inicio/>}></Route>
      <Route path ="/home" element={<Home/>}></Route>
      <Route path ="/about" element={<About/>}></Route>
      <Route path ="/detail/:id" element={<Detail/>}></Route>
      <Route path ="/create" element={<Form/>}></Route>
      </Routes>
    </div>
  );
}


export default App;
