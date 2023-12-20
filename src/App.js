import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homepage/HomePage';
import Footer from './customer/components/footer/Footer';
import Header from './customer/components/header/Header';
import Product from './customer/components/product/Product';
import ProductDetails from './customer/components/productdetails/ProductDetails';
import Cart from './customer/components/cart/Cart'
import Checkout from './customer/components/checkout/Checkout';

function App() {
  return (
    <div>
      <Header/>
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
