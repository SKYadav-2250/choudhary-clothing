import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div className="relative h-[80vh] w-full bg-gray-100 flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
                }}
            >
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 lead-tight"
                >
                    Celebrate the Victory
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl font-medium mb-10 max-w-2xl"
                >
                    Discover our latest collection of premium streetwear. Designed for comfort, styled for the streets.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        to="/"
                        className="bg-primary hover:bg-orange-600 text-white px-10 py-4 font-bold uppercase tracking-widest transition-colors duration-300 inline-block"
                    >
                        Shop Now
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
