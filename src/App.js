import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Home } from './pages/Home';
import { ProductsGrid } from './components/ProductsGrid';
import { ProductDetails } from './pages/ProductDetails';
import { Auth } from './components/Login';

export function App() {
  return (
    <Router>
      <Header className='App-header'/>
      <main>
        <Routes>
          <Route path="products/list" element={<ProductsGrid />}/>
          <Route path="products/:idProduct" element={<ProductDetails />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Auth />}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}
