import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import './firebase';

function App() {
  return (
    <div>
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
