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
import Order from './customer/components/order/Order';
import OrderDetails from './customer/components/order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './routers/CustomerRouters';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}/>
      </Routes>
    </div>
  );
}

export default App;
