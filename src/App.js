import logo from './logo.svg';
import './App.css';
import ContactoListComponent from './components/container/contacto.list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/** Componente de Listado de Contactos */}
        <ContactoListComponent></ContactoListComponent>
      </header>
    </div>
  );
}

export default App;
