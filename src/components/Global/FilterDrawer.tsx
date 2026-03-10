import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface FilterDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const FilterDrawer = ({ isOpen, onClose }: FilterDrawerProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 left-0 bottom-0 w-[85vw] sm:w-[350px] bg-white z-50 overflow-y-auto shadow-2xl flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold uppercase tracking-wider">Filters</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 flex-1 space-y-8">
                            {/* Category Filter */}
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Categories</h3>
                                <div className="space-y-3">
                                    {['Oversized T-Shirts', 'Hoodies', 'Jackets', 'Joggers', 'Classic Tees'].map((cat) => (
                                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                            <input type="checkbox" className="w-4 h-4 accent-primary rounded-sm cursor-pointer" />
                                            <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Size Filter */}
                            <div className="border-t border-gray-100 pt-8">
                                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Size</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                        <button
                                            key={size}
                                            className="w-12 h-12 rounded-sm border border-gray-300 flex items-center justify-center text-sm font-medium hover:border-black hover:bg-black hover:text-white transition-all cursor-pointer"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Filter */}
                            <div className="border-t border-gray-100 pt-8">
                                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Color</h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: 'Black', hex: '#000000' },
                                        { name: 'White', hex: '#ffffff' },
                                        { name: 'Blue', hex: '#3b82f6' },
                                        { name: 'Orange', hex: '#F97316' },
                                        { name: 'Green', hex: '#22c55e' },
                                        { name: 'Gray', hex: '#6b7280' },
                                    ].map((color) => (
                                        <button
                                            key={color.name}
                                            title={color.name}
                                            className="w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:scale-110 shadow-sm"
                                            style={{ backgroundColor: color.hex }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="border-t border-gray-100 pt-8 pb-8">
                                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Price</h3>
                                <div className="space-y-3">
                                    {['Under ₹999', '₹1000 - ₹1999', '₹2000 - ₹2999', 'Over ₹3000'].map((price) => (
                                        <label key={price} className="flex items-center gap-3 cursor-pointer group">
                                            <input type="radio" name="price" className="w-4 h-4 accent-primary cursor-pointer" />
                                            <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">{price}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex gap-4 mt-auto">
                            <button
                                onClick={onClose}
                                className="flex-1 py-3 border-2 border-black text-black font-bold uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-colors"
                            >
                                Clear
                            </button>
                            <button
                                onClick={onClose}
                                className="flex-1 py-3 bg-primary text-white font-bold uppercase tracking-wider text-sm hover:bg-orange-600 transition-colors"
                            >
                                Apply
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default FilterDrawer;
