import { Link } from 'react-router-dom';
import { products } from '../../data/mockData';

const ProductCard = ({ product }: { product: any }) => {
    return (
        <Link to={`/product/${product.id}`} className="group block">
            <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
                {/* Tag */}
                {product.tag && (
                    <div className="absolute top-2 left-2 z-20 bg-white px-2 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                        {product.tag} <span className="text-primary">🔥</span>
                    </div>
                )}

                {/* Primary Image */}
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* Secondary Image (Hover) */}
                <img
                    src={product.images[1]}
                    alt={`${product.name} alternate`}
                    className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 transform group-hover:scale-105"
                />
            </div>

            <div className="px-1 text-center md:text-left">
                <h3 className="text-sm font-semibold text-gray-900 truncate uppercase mt-2">{product.name}</h3>
                <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                    <span className="font-bold text-sm">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                        <span className="text-gray-400 line-through text-xs">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                </div>
            </div>
        </Link>
    );
};

const ProductGrid = () => {
    return (
        <div className="px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="mt-12 flex justify-center">
                <Link
                    to="/"
                    className="border-2 border-black hover:bg-black hover:text-white px-8 py-3 text-sm font-bold uppercase tracking-widest transition-colors"
                >
                    View All Products
                </Link>
            </div>
        </div>
    );
};

export default ProductGrid;
