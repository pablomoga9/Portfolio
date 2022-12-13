import logo from './logo.svg';
import './App.css';
import Main from '../src/components/Main/Main';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import '../src/styles/styles.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
