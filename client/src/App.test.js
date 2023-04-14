import { render, screen } from '@testing-library/react';
import App from './App';
import Nav from "../Componentes/Nav"
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Form from "../../src/Views/Form/Form"

describe('Componente LandingPage', () => {
  it('Existe un boton (Star))', async () => { 
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText('/home');
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Componente Navbar', () => {
  it('Tiene un boton de inicio para ir al Landing Page', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    )
    expect(screen.getByText(/home/i)).toBeInTheDocument()
  })
});

describe('Componente formulario Activity', () => {
  it('Tiene un campo para ingresar el nombre', async () =>{
    render(
      <Provider store={store}>
        <BrowserRouter>
          < Form />
        </BrowserRouter>
      </Provider>
    )
    expect(screen.getByText('/create')).toBeInTheDocument()
  });
})
