import './App.css';
import Inicio from './Components/LandingPage/inicio';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/home';
import About from './Components/About/About';
import {Routes,Route, useNavigate, useLocation} from "react-router-dom"
import Detail from './Components/CountryDetail/Detail';

function App() {
  const location= useLocation();
  const navigate= useNavigate();

  function onSearch(text) {

    if(text.lengt >= 3){
      fetch(`http://localhost:3001/countries/${text}`) //<<DB
        .then((response) => response.json())
        .then((data) => {
            if (data.name) {
              //setCharacter((oldChars) => [...oldChars, data]);
              navigate("/home");
            } else {
              window.alert('Country not found');
            }
        });
        }
      else {
          fetch(`http://localhost:3001/countries/?name=${text}`) //<<DB
          .then((response) => response.json())
          .then((data) => {
              if (data.name) {
                //setCharacter((oldChars) => [...oldChars, data]);
                navigate("/home");
              } else {
                window.alert('Country not found');
              }
        });
        }
  }


  return (
    <div className="App">

  {location.pathname !== "/" && <Nav onSearch={onSearch} />} 

      <Routes>
      <Route path="/" element={<Inicio/>}></Route>
      <Route path ="/home" element={<Home/>}></Route>
      <Route path ="/about" element={<About/>}></Route>
      <Route path ="/countries/:id" element={<Detail/>}></Route>

      </Routes>
    </div>
  );
}


export default App;
