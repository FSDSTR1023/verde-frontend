import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperPics = ({ pics, objectFit = 'cover' }) => {

    if (!pics || pics.length === 0) {
        throw new Error('El parámetro "pics" es obligatorio');
    }

    return (
        <Swiper
            navigation={true}
            keyboard={true}
            modules={[Navigation, Keyboard]}
        >
            {
                pics
                    .map((p, i) => <SwiperSlide key={`carousel-${p.id}-${i}`}>
                        <img
                            src={p.image}
                            alt={p.title}
                            loading="lazy"
                            style={{ objectFit: objectFit }}
                        />
                    </SwiperSlide>)
            }
        </Swiper>
    )
};
