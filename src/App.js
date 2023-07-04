import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
import { Home } from './pages/Home';

export function App() {
  return (
    <Router>
      <Header className='App-header'/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}
