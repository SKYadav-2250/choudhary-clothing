const StickyCTA = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] z-40 md:hidden border-t border-gray-100">
            <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-sm uppercase tracking-widest transition-colors">
                Add to Cart
            </button>
        </div>
    );
};

export default StickyCTA;
