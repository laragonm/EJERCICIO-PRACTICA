import logo from './logo.svg';
import './App.css';
import ContactoComponent from './components/pure/contacto.jsx';

function App() {
  const defaultContact = 
  {
    nombre: 'Luis',
    apellido: 'Aragón',
    email: 'luisaragmor@gmail.com',
    conectado: false,
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/** Componente de Listado de Contactos */}
        <ContactoComponent contacto={ defaultContact }></ContactoComponent>
      </header>
    </div>
  );
}

export default App;
