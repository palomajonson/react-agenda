
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='s1'>
        <h1>Agenda</h1>
        <div className='rotas'>
          <Link to={'/consultar'}> Consultar </Link>
          <Link to={'/inserir'}> Inserir </Link>
        </div>
        
      </div>
    </div>
  );
}

export default App;
