import previewImage1 from '../../assets/images/image-product-1.jpg';
import previewImage2 from '../../assets/images/image-product-2.jpg';
import previewImage3 from '../../assets/images/image-product-3.jpg';
import previewImage4 from '../../assets/images/image-product-4.jpg';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

function ProductImages() {
  const [showedImage, setShowedImage] = useState('product-preview-1');

  return (
    <div className="w-[60vw]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img src={previewImage1} alt="product-preview" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={previewImage2} alt="product-preview" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={previewImage3} alt="product-preview" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={previewImage4} alt="product-preview" />
        </SwiperSlide>
      </Swiper>

      <div className="flex mt-7 justify-between h-[79px] relative">
        <img
          src={previewImage1}
          alt="product-preview-1"
          className="rounded-[15px] hover:contrast-[.85]"
          onClick={(e) => setShowedImage(e.target.alt)}
        />
        {showedImage === 'product-preview-1' && (
          <div className="block absolute bg-white w-[20%] h-[100%] rounded-[15px] bg-opacity-50 border-[#FF7D1A] border-2"></div>
        )}

        <img
          src={previewImage2}
          alt="product-preview-2"
          className="rounded-[15px] hover:contrast-[.85]"
          onClick={(e) => setShowedImage(e.target.alt)}
        />
        {showedImage === 'product-preview-2' && (
          <div className="block absolute bg-white w-[20%] h-[100%] rounded-[15px] bg-opacity-50 border-[#FF7D1A] border-2 translate-x-[7.35vw]"></div>
        )}

        <img
          src={previewImage3}
          alt="product-preview-3"
          className="rounded-[15px] hover:contrast-[.85]"
          onClick={(e) => setShowedImage(e.target.alt)}
        />
        {showedImage === 'product-preview-3' && (
          <div className="block absolute bg-white w-[20%] h-[100%] rounded-[15px] bg-opacity-50 border-[#FF7D1A] border-2 translate-x-[14.8vw]"></div>
        )}

        <img
          src={previewImage4}
          alt="product-preview-4"
          className="rounded-[15px] hover:contrast-[.85]"
          onClick={(e) => setShowedImage(e.target.alt)}
        />
        {showedImage === 'product-preview-4' && (
          <div className="block absolute bg-white w-[20%] h-[100%] rounded-[15px] bg-opacity-50 border-[#FF7D1A] border-2 translate-x-[22.3vw]"></div>
        )}
      </div>
    </div>
  );
}

export default ProductImages;
