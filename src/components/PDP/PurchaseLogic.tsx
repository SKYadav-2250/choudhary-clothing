import { useState } from 'react';

const SIZES = [
    { label: 'XS', inStock: true },
    { label: 'S', inStock: true },
    { label: 'M', inStock: true },
    { label: 'L', inStock: false },
    { label: 'XL', inStock: true },
    { label: 'XXL', inStock: false },
];

const PurchaseLogic = () => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-700">Size</span>
                <button className="text-sm underline cursor-pointer hover:text-primary transition-colors">
                    Size Chart
                </button>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
                {SIZES.map((size) => (
                    <button
                        key={size.label}
                        disabled={!size.inStock}
                        onClick={() => setSelectedSize(size.label)}
                        className={`
              w-14 h-14 rounded-full flex items-center justify-center text-sm font-medium border
              transition-colors duration-200
              ${!size.inStock
                                ? 'opacity-40 cursor-not-allowed border-gray-300 relative overflow-hidden before:content-[""] before:absolute before:w-[150%] before:h-[1px] before:bg-gray-400 before:rotate-45'
                                : selectedSize === size.label
                                    ? 'border-primary bg-primary text-white'
                                    : 'border-gray-300 hover:border-black hover:bg-gray-50'
                            }
            `}
                    >
                        {size.label}
                    </button>
                ))}
            </div>

            <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-sm uppercase tracking-widest transition-colors hidden md:block">
                Add to Cart
            </button>

            <div className="mt-6 flex flex-col gap-3 text-sm text-gray-600 border-t border-b border-gray-100 py-6">
                <span className="flex items-center gap-3">
                    <span className="bg-green-100 text-green-600 p-1 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                    7 Days easy exchange & return
                </span>
                <span className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-600 p-1 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
                    Estimated Delivery: 3-5 Business Days
                </span>
            </div>
        </div>
    );
};

export default PurchaseLogic;
