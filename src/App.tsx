import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import FloatingWhatsApp from './components/Global/FloatingWhatsApp';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Account from './pages/Account';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
