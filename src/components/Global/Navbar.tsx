import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FilterDrawer from './FilterDrawer';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Left section - Mobile Menu & Desktop Links */}
                    <div className="flex items-center flex-1 space-x-4 md:space-x-8">
                        <button
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div className="hidden md:flex space-x-8">
                            <div className="group relative">
                                <button className="text-sm font-medium hover:text-primary transition-colors">
                                    Shop By Category
                                </button>
                                {/* Dropdown would go here */}
                            </div>
                            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Sale</Link>
                        </div>
                    </div>

                    {/* Center section - Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center flex-1">
                        <Link to="/" className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2">
                            <span className="text-primary">🔥</span>
                            Trendsetter
                        </Link>
                    </div>

                    {/* Right section - Icons */}
                    <div className="flex items-center justify-end space-x-4 flex-1">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link
                            to={localStorage.getItem('user') ? "/account" : "/login"}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block"
                        >
                            <User className="w-5 h-5" />
                        </Link>
                        <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                            <ShoppingBag className="w-5 h-5" />
                            {cartCount > 0 && (
                                <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                </div>
            </div>

            <FilterDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            />
        </nav>
    );
};

export default Navbar;
