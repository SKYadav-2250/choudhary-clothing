import { reviews } from '../../data/mockData';
import { Star } from 'lucide-react';

const SocialProof = () => {
    return (
        <div className="my-16 border-t border-gray-100 pt-16">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">Real Stories From Real Users</h2>
                <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 pb-4 snap-x md:justify-center">
                    {reviews.map((review) => (
                        <div key={review.id} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 snap-center border-2 border-white shadow-md">
                            <img src={review.image} alt="User" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center max-w-2xl mx-auto px-4 mt-20">
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">Customer Reviews</h2>
                <div className="flex items-center justify-center gap-1 mb-2 text-primary">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-current w-6 h-6" />)}
                </div>
                <p className="text-gray-500 mb-6">4.9 / 5.0 based on 128 reviews</p>
                <button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 font-bold uppercase tracking-widest transition-colors mb-8">
                    Write a Review
                </button>
            </div>
        </div>
    );
};

export default SocialProof;
