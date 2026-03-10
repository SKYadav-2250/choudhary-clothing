import { categories } from '../../data/mockData';
import { Link } from 'react-router-dom';

const CategoryMenu = () => {
    return (
        <div className="w-full overflow-x-auto py-8 hide-scrollbar border-b border-gray-100">
            <div className="flex gap-6 px-4 md:justify-center md:gap-12 min-w-max md:min-w-0">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        to="/"
                        className="flex flex-col items-center group cursor-pointer"
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 border border-gray-100 group-hover:border-primary transition-colors p-[2px]">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-800 group-hover:text-primary transition-colors">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryMenu;
