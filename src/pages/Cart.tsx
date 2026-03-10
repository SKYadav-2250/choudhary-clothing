import { Link } from 'react-router-dom';
import { products } from '../data/mockData';

const Cart = () => {
    // Mock cart items based on our mock data
    const cartItems = [
        { ...products[0], quantity: 1, size: 'L' },
        { ...products[2], quantity: 2, size: 'M' }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="pt-24 min-h-screen pb-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-center md:text-left">Your Cart</h1>

                {cartItems.length > 0 ? (
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Cart Items List */}
                        <div className="flex-1">
                            <div className="border-t border-gray-200">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="flex gap-4 py-6 border-b border-gray-200">
                                        <Link to={`/product/${item.id}`} className="w-24 h-32 bg-gray-100 flex-shrink-0 relative group">
                                            <img
                                                src={item.images[0]}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </Link>
                                        <div className="flex-1 flex flex-col">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-sm font-semibold uppercase text-gray-900 line-clamp-2">
                                                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                                                    </h3>
                                                    <p className="text-sm text-gray-500 mt-1">Size: {item.size}</p>
                                                    <p className="text-sm text-gray-500 mt-1">Qty: {item.quantity}</p>
                                                </div>
                                                <p className="text-sm font-bold ml-4">₹{(item.price * item.quantity).toLocaleString()}</p>
                                            </div>
                                            <div className="mt-auto flex justify-between items-center pt-4">
                                                <div className="flex items-center border border-gray-300 rounded-sm">
                                                    <button className="px-3 py-1 font-semibold hover:bg-gray-100 transition-colors">-</button>
                                                    <span className="px-3 py-1 text-sm font-medium border-x border-gray-300">{item.quantity}</span>
                                                    <button className="px-3 py-1 font-semibold hover:bg-gray-100 transition-colors">+</button>
                                                </div>
                                                <button className="text-sm text-gray-500 underline hover:text-black transition-colors">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="w-full md:w-[350px] bg-gray-50 p-6 h-fit">
                            <h2 className="text-lg font-bold uppercase tracking-wider mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm pb-4 border-b border-gray-200">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-semibold text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between items-center text-lg font-bold">
                                    <span>Total</span>
                                    <span>₹{subtotal.toLocaleString()}</span>
                                </div>
                                <p className="text-[10px] text-gray-500 text-right uppercase">Inclusive of all taxes</p>
                            </div>
                            <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-sm uppercase tracking-widest transition-colors shadow-md">
                                Secure Checkout
                            </button>
                            <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
                                <span className="bg-green-100 text-green-600 p-0.5 rounded-full"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                                Secure checkout and free returns
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h2 className="text-xl font-bold uppercase tracking-wider mb-4">Your cart is empty</h2>
                        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
                        <Link
                            to="/"
                            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-10 uppercase tracking-widest transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
