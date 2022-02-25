import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCube } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import { 
    slider_1_1, slider_1_2, 
    slider_2_1, slider_2_2,
    slider_3_1, slider_3_2,
} from "../..";
import "./MainSlider.css";

const MainSlider = () => {
    const slides = [
        {
            image_1: slider_2_1,
            image_2: slider_2_2
        },
        {
            image_1: slider_3_1,
            image_2: slider_3_2
        },
        {
            image_1: slider_1_1,
            image_2: slider_1_2
        },
    ];

    return (
        <Swiper
            modules={[Navigation, EffectCube]}
            speed={1000}
            navigation
            loop={true}
            // effect="cube"
/*             cubeEffect={{
                shadow: true,
                shadowOffset: 80,
                shadowScale: 0.95,
                slideShadows: true
            }} */
        >
            {slides.map((slide, index) =>
                <SwiperSlide key={index}>
                    <picture>
                        <source media="(min-width: 820px)" srcSet={slide.image_2} />
                        <img src={slide.image_1} alt={`slider ${index}`} />
                    </picture>
                </SwiperSlide>)}
        </Swiper>
     );
}
 
export default MainSlider;