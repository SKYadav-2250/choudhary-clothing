import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold tracking-tighter uppercase mb-4 text-primary flex items-center gap-2">
                        <span>🔥</span>
                        Trendsetter
                    </h3>
                    <p className="text-sm text-gray-400 max-w-xs">
                        Premium streetwear designed for maximum comfort and minimalist aesthetic.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider text-gray-300">Shop</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/" className="hover:text-primary transition-colors">All Products</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">New Arrivals</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Best Sellers</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider text-gray-300">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Returns & Exchanges</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">Fit Guide</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider text-gray-300">Join Us</h4>
                    <p className="text-sm text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-900 text-white px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary border border-gray-800"
                        />
                        <button className="bg-primary hover:bg-orange-600 text-white px-4 py-2 font-medium transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Trendsetter. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
