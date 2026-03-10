import { Package, MapPin, Heart, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div className="pt-24 min-h-screen pb-16 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="md:flex md:gap-8">
                    {/* Sidebar / Menu */}
                    <div className="md:w-64 mb-8 md:mb-0">
                        <div className="bg-white p-6 shadow-sm border border-gray-100">
                            <h2 className="font-bold text-xl uppercase tracking-tighter mb-2">Sumit</h2>
                            <p className="text-gray-500 text-sm mb-6">sumit@example.com</p>

                            <nav className="space-y-2 flex flex-col">
                                <Link to="#" className="flex items-center gap-3 py-3 px-4 bg-gray-50 font-medium text-primary rounded-sm transition-colors border-l-2 border-primary">
                                    <Package className="w-5 h-5" />
                                    Orders
                                </Link>
                                <Link to="#" className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-sm transition-colors border-l-2 border-transparent">
                                    <MapPin className="w-5 h-5" />
                                    Addresses
                                </Link>
                                <Link to="#" className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-sm transition-colors border-l-2 border-transparent">
                                    <Heart className="w-5 h-5" />
                                    Wishlist
                                </Link>
                                <button className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-sm transition-colors mt-8 border-l-2 border-transparent border-t border-t-gray-100 pt-6">
                                    <LogOut className="w-5 h-5" />
                                    Logout
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        <div className="bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
                            <h1 className="text-2xl font-black uppercase tracking-tighter mb-6">Order History</h1>

                            {/* Empty Order State */}
                            <div className="text-center py-16 px-4 bg-gray-50 border border-dashed border-gray-300">
                                <Package className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">No orders placed yet.</h3>
                                <p className="text-gray-500 mb-6">When you place an order, it will appear here.</p>
                                <Link
                                    to="/"
                                    className="inline-block bg-primary hover:bg-orange-600 text-white font-bold py-3 px-8 uppercase tracking-widest text-sm transition-colors"
                                >
                                    Start Shopping
                                </Link>
                            </div>

                            {/* Example of what a populated state might look like 
                            <div className="space-y-6">
                                <div className="border border-gray-200 rounded-sm p-6">
                                    <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Order #ORD-28491</p>
                                            <p className="font-medium text-sm">Placed on Oct 12, 2026</p>
                                        </div>
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Delivered</span>
                                    </div>
                                    <p className="text-sm font-semibold">Total: ₹2,498.00</p>
                                </div>
                            </div>
                            */}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Account;
