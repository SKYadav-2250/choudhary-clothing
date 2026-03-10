import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const MediaGallery = ({ images }: { images: string[] }) => {
    return (
        <div className="w-full md:w-1/2 md:pr-8">
            {/* Mobile view with Swiper */}
            <div className="md:hidden">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="w-full aspect-[3/4]"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img src={src} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop view Grid */}
            <div className="hidden md:grid grid-cols-2 gap-4">
                {images.map((src, index) => (
                    <div key={index} className={`aspect-[3/4] ${index === 0 ? 'col-span-2' : ''}`}>
                        <img src={src} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaGallery;
