import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import FloatingWhatsApp from './components/Global/FloatingWhatsApp';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddProduct from './pages/AddProduct';
import { CartProvider } from './context/CartContext';

// Replace with your actual Google Client ID
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col font-sans relative">
            <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/add-product" element={<AddProduct />} />
            </Routes>
          </main>
          <Footer />
            <FloatingWhatsApp />
          </div>
        </BrowserRouter>
      </CartProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
