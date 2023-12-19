import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homepage/HomePage';
import Footer from './customer/components/footer/Footer';
import Header from './customer/components/header/Header';

function App() {
  return (
    <div>
      <Header/>
      <div>
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
