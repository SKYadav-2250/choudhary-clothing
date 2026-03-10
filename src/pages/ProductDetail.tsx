import { useParams } from 'react-router-dom';
import { products } from '../data/mockData';
import MediaGallery from '../components/PDP/MediaGallery';
import PurchaseLogic from '../components/PDP/PurchaseLogic';
import StickyCTA from '../components/PDP/StickyCTA';
import SocialProof from '../components/PDP/SocialProof';
import { useEffect } from 'react';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id)) || products[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="pt-24 min-h-screen pb-24 md:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row mb-16">
                    <MediaGallery images={product.images} />

                    <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
                        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-4">{product.name}</h1>
                        <div className="flex items-end gap-3 mb-6">
                            <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
                            {product.originalPrice && (
                                <span className="text-gray-400 line-through text-lg mb-0.5">₹{product.originalPrice.toLocaleString()}</span>
                            )}
                            <span className="text-xs text-gray-500 ml-2 mb-1.5 uppercase font-medium">Inclusive of all taxes.</span>
                        </div>

                        <PurchaseLogic />

                        <div className="mt-12">
                            <h3 className="font-bold uppercase tracking-wider text-sm mb-4">Available Offers</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="border border-orange-200 border-dashed rounded-md p-4">
                                    <p className="text-sm text-gray-800 font-medium mb-3">Enjoy ₹100 off on orders ₹999+</p>
                                    <div className="flex justify-between items-center">
                                        <span className="bg-gray-100 px-3 py-1 text-xs font-bold uppercase text-gray-600 rounded">INSTANT100</span>
                                        <button className="bg-green-600 text-white px-4 py-1.5 text-xs font-bold rounded hover:bg-green-700 transition-colors">Copy</button>
                                    </div>
                                </div>
                                <div className="border border-orange-200 border-dashed rounded-md p-4">
                                    <p className="text-sm text-gray-800 font-medium mb-3">Buy 2 and get 10% off</p>
                                    <div className="flex justify-between items-center">
                                        <span className="bg-gray-100 px-3 py-1 text-xs font-bold uppercase text-gray-600 rounded">DOUBLEUP10</span>
                                        <button className="bg-green-600 text-white px-4 py-1.5 text-xs font-bold rounded hover:bg-green-700 transition-colors">Copy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SocialProof />
            </div>

            <StickyCTA />
        </div>
    );
};

export default ProductDetail;
