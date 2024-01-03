import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useState } from "react";
import { useEffect } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ImageList, ImageListItem } from "@mui/material";

export const ClientGallery = () => {

  const [pics, setPics] = useState([
    {
      id: 30,
      image: "https://cms.w2m.com/.imaging/fullHd/Sites/New-Blue/Programas-Info/CARIBE/CUBA/Circuitos/circuito-paisajes-de-cuba-y-varadero-quality/paisaje-quality-cubavaradero4.jpg",
      title: "mi imagen"
    }
  ]);

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setPics(prev => [...prev, ...json]))

  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        keyboard={true}
        modules={[Navigation, Keyboard]}
      >
        {
          pics
            .map(p => <SwiperSlide key={`carousel-${p.id}`}>
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
              />
            </SwiperSlide>)
        }
      </Swiper>

      <ImageList
        variant="quilted"
        cols={4}
        rowHeight={350}
      >
        {
          pics
            .map((item) => (
              <ImageListItem
                key={`masonry-${item.id}`}
                cols={item.id % 3 ? 1 : 2}
                rows={item.id % 4 ? 1 : 2}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))
        }
      </ImageList>

    </>
  )
}
