import './schoolPictures.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import foto1 from '../../img/sobre/foto1.jpg';
import foto2 from '../../img/sobre/foto2.jpg';
import foto3 from '../../img/sobre/foto3.jpg';
import foto4 from '../../img/sobre/foto4.jpg';
import foto5 from '../../img/sobre/foto5.jpg';
import foto6 from '../../img/sobre/foto6.jpg';

function SchoolPictures() {

    const images = [
        { id: 1, image: `${foto1}` },
        { id: 2, image: `${foto2}` },
        { id: 3, image: `${foto3}` },
        { id: 4, image: `${foto4}` },
        { id: 5, image: `${foto5}` },
        { id: 6, image: `${foto6}` }
    ]

    return (
        <div className="container-cchool-pictures">
            <Swiper spaceBetween={50} slidesPerView={1} navigation speed={800}
                autoplay={{ delay: 5000, disableOnInteraction: false, }} >
                {images.map((img) => (
                    <SwiperSlide key={img.id}>
                        <img className='slide-item' src={img.image} />
                    </SwiperSlide>
                ))}
            </Swiper >
        </div >
    );
}

export default SchoolPictures;
