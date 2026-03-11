import { useState } from 'react';
import { productService } from '../services/productService';

const CATEGORIES = ['Oversized T-Shirts', 'Hoodies', 'Jackets', 'Joggers', 'Classic Tees'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function AddProduct() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    // Form State
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState<number | ''>('');
    const [originalPrice, setOriginalPrice] = useState<number | ''>('');
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [tag, setTag] = useState('');
    const [stock, setStock] = useState<number>(0);
    const [imagesInput, setImagesInput] = useState('');
    
    // Arrays
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [colors, setColors] = useState<{name: string, hex: string}[]>([]);

    const handleSizeToggle = (size: string) => {
        setSelectedSizes(prev => 
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    const handleAddColor = () => {
        setColors([...colors, { name: '', hex: '#000000' }]);
    };

    const handleColorChange = (index: number, field: 'name' | 'hex', value: string) => {
        const newColors = [...colors];
        newColors[index][field] = value;
        setColors(newColors);
    };

    const handleRemoveColor = (index: number) => {
        setColors(colors.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);
        setIsLoading(true);

        // Validate explicit arrays
        if (selectedSizes.length === 0) {
            setError("At least one size is required.");
            setIsLoading(false);
            return;
        }

        const imageArray = imagesInput.split(',').map(url => url.trim()).filter(url => url.length > 0);
        if (imageArray.length === 0) {
            setError("At least one image URL is required.");
            setIsLoading(false);
            return;
        }
        
        // Filter empty colors
        const validColors = colors.filter(c => c.name.trim() !== '' && c.hex.trim() !== '');

        const productData = {
            name,
            description,
            price: Number(price),
            originalPrice: originalPrice ? Number(originalPrice) : undefined,
            category,
            sizes: selectedSizes,
            images: imageArray,
            colors: validColors,
            tag: tag.trim() || undefined,
            stock: Number(stock)
        };

        try {
            await productService.createProduct(productData);
            setSuccessMessage("Product added successfully!");
            // Optional: reset form after success
            setName('');
            setDescription('');
            setPrice('');
            setOriginalPrice('');
            setImagesInput('');
            setSelectedSizes([]);
            setColors([]);
            setTag('');
            setStock(0);
            
            // Scroll to top to see success message
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err: any) {
            setError(err.message || 'Failed to create product');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="pt-24 min-h-screen pb-16 bg-gray-50 flex justify-center px-4">
            <div className="bg-white p-8 md:p-12 max-w-3xl w-full shadow-sm border border-gray-100 rounded-sm">
                <div className="mb-8 border-b border-gray-100 pb-6">
                    <h1 className="text-3xl font-black uppercase tracking-tighter">Add New Product</h1>
                    <p className="text-gray-500 text-sm mt-2">Publish a new clothing item to the catalog.</p>
                </div>

                {error && (
                    <div className="mb-6 bg-red-50 text-red-600 p-4 border border-red-200 text-sm font-medium rounded-sm">
                        {error}
                    </div>
                )}
                
                {successMessage && (
                    <div className="mb-6 bg-green-50 text-green-600 p-4 border border-green-200 text-sm font-medium rounded-sm">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Info */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold uppercase tracking-wider bg-gray-50 p-3 mb-4 border-l-4 border-primary">Basic Details</h2>
                        
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Product Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                                placeholder="e.g., Premium Heavyweight Hoodie"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Description <span className="text-red-500">*</span></label>
                            <textarea
                                required
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors resize-y"
                                placeholder="Detailed description of the product..."
                            />
                        </div>
                    </div>

                    {/* Pricing & Inventory */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold uppercase tracking-wider bg-gray-50 p-3 mb-4 border-l-4 border-primary">Pricing & Inventory</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Price (₹) <span className="text-red-500">*</span></label>
                                <input
                                    type="number"
                                    required
                                    min="0"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')}
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                                    placeholder="2999"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Original Price (₹)</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={originalPrice}
                                    onChange={(e) => setOriginalPrice(e.target.value ? Number(e.target.value) : '')}
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                                    placeholder="3999"
                                />
                                <p className="text-[10px] text-gray-500 mt-1 uppercase">Leave blank if no discount</p>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Stock count <span className="text-red-500">*</span></label>
                                <input
                                    type="number"
                                    required
                                    min="0"
                                    value={stock}
                                    onChange={(e) => setStock(Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Category <span className="text-red-500">*</span></label>
                                <select 
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors bg-white"
                                >
                                    {CATEGORIES.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Promotional Tag</label>
                                <input
                                    type="text"
                                    value={tag}
                                    onChange={(e) => setTag(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                                    placeholder="e.g., Best Seller, New Arrival"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Media */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold uppercase tracking-wider bg-gray-50 p-3 mb-4 border-l-4 border-primary">Media Links</h2>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Image URLs <span className="text-red-500">*</span></label>
                            <textarea
                                required
                                rows={3}
                                value={imagesInput}
                                onChange={(e) => setImagesInput(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                                placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                            />
                            <p className="text-[10px] text-gray-500 mt-2 uppercase font-medium">Separate multiple URLs with commas (,)</p>
                        </div>
                    </div>

                    {/* Variations */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-bold uppercase tracking-wider bg-gray-50 p-3 mb-4 border-l-4 border-primary">Variations</h2>
                        
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">Available Sizes <span className="text-red-500">*</span></label>
                            <div className="flex flex-wrap gap-3">
                                {SIZES.map(size => (
                                    <button
                                        type="button"
                                        key={size}
                                        onClick={() => handleSizeToggle(size)}
                                        className={`w-12 h-12 flex items-center justify-center border font-bold text-sm transition-all focus:outline-none
                                            ${selectedSizes.includes(size) 
                                                ? 'border-black bg-black text-white shadow-md' 
                                                : 'border-gray-300 text-gray-600 hover:border-gray-800 hover:text-black hover:bg-gray-50'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">Available Colors</label>
                                <button 
                                    type="button"
                                    onClick={handleAddColor}
                                    className="text-xs font-bold uppercase tracking-wider text-primary hover:text-orange-600 transition-colors"
                                >
                                    + Add Color
                                </button>
                            </div>
                            
                            {colors.length === 0 ? (
                                <div className="p-6 border border-dashed border-gray-300 text-center text-sm text-gray-500">
                                    No colors added. Click "+ Add Color" to specify variants.
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {colors.map((color, index) => (
                                        <div key={index} className="flex flex-col sm:flex-row gap-3 items-end sm:items-center bg-gray-50 p-3 border border-gray-100">
                                            <div className="w-full sm:flex-1">
                                                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Color Name</label>
                                                <input
                                                    type="text"
                                                    value={color.name}
                                                    onChange={(e) => handleColorChange(index, 'name', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black text-sm"
                                                    placeholder="e.g., Midnight Black"
                                                />
                                            </div>
                                            <div className="flex-1 w-full sm:w-auto">
                                                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Hex Code</label>
                                                <div className="flex gap-2 items-center">
                                                    <input
                                                        type="color"
                                                        value={color.hex}
                                                        onChange={(e) => handleColorChange(index, 'hex', e.target.value)}
                                                        className="h-9 w-12 cursor-pointer border border-gray-300 p-0.5"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={color.hex.toUpperCase()}
                                                        onChange={(e) => handleColorChange(index, 'hex', e.target.value)}
                                                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-black text-sm uppercase"
                                                        placeholder="#000000"
                                                    />
                                                </div>
                                            </div>
                                            <button 
                                                type="button"
                                                onClick={() => handleRemoveColor(index)}
                                                className="w-full sm:w-auto px-4 py-2 border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 font-medium text-xs uppercase tracking-wider transition-colors"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 mt-8">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full font-bold py-4 uppercase tracking-widest transition-colors flex justify-center shadow-sm
                                ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-900 text-white'}`}
                        >
                            {isLoading ? 'Publishing Product...' : 'Publish Product'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
