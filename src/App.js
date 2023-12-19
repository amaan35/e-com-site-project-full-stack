import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homepage/HomePage';
import Footer from './customer/components/footer/Footer';
import Header from './customer/components/header/Header';
import Product from './customer/components/product/Product';

function App() {
  return (
    <div>
      <Header/>
      <div>
        {/* <HomePage/> */}
        <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
