import React from "react";
import SwiperPics from "../components/swiper-pics/SwiperPics";

const photos = [
  {
    image: "/photos-home/1.webp",
    id: "Portada",
    title: "Portada",
  },

  {
    image: "/photos-home/2.webp",
    id: "unsplash_1avvCZEcSsI",
    title: "unsplash_1avvCZEcSsI",
  },

  {
    image: "/photos-home/3.webp",
    id: "unsplash_5JEbKNp9uNk",
    title: "unsplash_5JEbKNp9uNk",
  },

  {
    image: "/photos-home/4.webp",
    id: "unsplash_5VhSc5jCA2g",
    title: "unsplash_5VhSc5jCA2g",
  },

  {
    image: "/photos-home/6.webp",
    id: "unsplash_8ezfg5oYHNY",
    title: "unsplash_8ezfg5oYHNY",
  },

  {
    image: "/photos-home/8.webp",
    id: "unsplash_BOhDR9n4u2s",
    title: "unsplash_BOhDR9n4u2s",
  },

  {
    image: "/photos-home/10.webp",
    id: "unsplash_ExjpauryqzA",
    title: "unsplash_ExjpauryqzA",
  },

  {
    image: "/photos-home/11.webp",
    id: "unsplash_HabFYy1Iic0",
    title: "unsplash_HabFYy1Iic0",
  },

  {
    image: "/photos-home/12.webp",
    id: "unsplash_IfjHaIoAoqE",
    title: "unsplash_IfjHaIoAoqE",
  },

  {
    image: "/photos-home/13.webp",
    id: "unsplash_JFAPl7brL6U",
    title: "unsplash_JFAPl7brL6U",
  },

  {
    image: "/photos-home/14.webp",
    id: "unsplash_NSVJAAXOYHs",
    title: "unsplash_NSVJAAXOYHs",
  },

  {
    image: "/photos-home/15.webp",
    id: "unsplash_NYqEk7a42yc",
    title: "unsplash_NYqEk7a42yc",
  },

  {
    image: "/photos-home/16.webp",
    id: "unsplash_Q9IotyAz3RY",
    title: "unsplash_Q9IotyAz3RY",
  },

  {
    image: "/photos-home/17.webp",
    id: "unsplash_R2txNeMEs_I",
    title: "unsplash_R2txNeMEs_I",
  },

  {
    image: "/photos-home/19.webp",
    id: "unsplash_XySWtbETa1M",
    title: "unsplash_XySWtbETa1M",
  },
];

const Home = () => {
  return (
    <div>
      <SwiperPics pics={photos.map((ph) => ph.image)} />

      <h2 className="p-3 my-10 Tenor-Sans text-3xl text-center">
        GALERÍAS PROFESIONALES PARA FOTÓGRAFOS
      </h2>

      <div className="flex flex-col gap-12 p-3 mx-6 my-6">
        <div className="flex justify-evenly items-center gap-4">
          <img className="max-w-2xl" src="/gallery_example.png" alt="#" />

          {/* <SwiperPics pics={galleryExample} /> */}

          <div className="max-w-2xl">
            <h3 className="text-xl font-bold w-full Tenor-Sans text-center m-3">
              CREA TU GALERÍA
            </h3>

            <p className="Tenor-Sans text-center p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              accusamus ratione veritatis ipsum cum ea itaque doloribus sed
              quisquam nulla dignissimos commodi rerum odit at reprehenderit
              consequuntur dolores illum blanditiis.
            </p>
          </div>
        </div>
        <div className="flex justify-evenly items-center gap-4">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold w-full Tenor-Sans text-center m-3">
              ADMINISTRA TUS CLIENTES
            </h3>

            <p className="Tenor-Sans text-center p-5 px-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis laudantium vero iure alias quasi enim sunt a commodi
              aut, labore, eum perspiciatis exercitationem neque. Cum ratione
              culpa dolores facilis quaerat?
            </p>
          </div>
          <img className="max-w-2xl" src="/clients_example1.png" alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Home;
