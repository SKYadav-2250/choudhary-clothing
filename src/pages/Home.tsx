import HeroSection from '../components/Home/HeroSection';
import CategoryMenu from '../components/Home/CategoryMenu';
import ProductGrid from '../components/Home/ProductGrid';

const Home = () => {
    return (
        <div className="pt-20 lg:pt-24 min-h-screen">
            <HeroSection />
            <CategoryMenu />
            <div className="my-16">
                <h2 className="text-3xl font-bold uppercase tracking-tighter text-center mb-8">New Arrivals</h2>
                <ProductGrid />
            </div>
        </div>
    );
};

export default Home;
