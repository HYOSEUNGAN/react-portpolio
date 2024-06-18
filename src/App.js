import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainRouter from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
