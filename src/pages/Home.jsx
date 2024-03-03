import React from "react";
import SwiperPics from "../components/swiper-pics/SwiperPics";
import EndPage from "../components/end-page/EndPage";

const photos = [
  {
    image: "/photos/Portada.png",
    id: "Portada",
    title: "Portada",
  },

  {
    image: "/photos/unsplash_1avvCZEcSsI.png",
    id: "unsplash_1avvCZEcSsI",
    title: "unsplash_1avvCZEcSsI",
  },

  {
    image: "/photos/unsplash_5JEbKNp9uNk.png",
    id: "unsplash_5JEbKNp9uNk",
    title: "unsplash_5JEbKNp9uNk",
  },

  {
    image: "/photos/unsplash_5VhSc5jCA2g.png",
    id: "unsplash_5VhSc5jCA2g",
    title: "unsplash_5VhSc5jCA2g",
  },

  {
    image: "/photos/unsplash_7-D5C6ioPCw.png",
    id: "unsplash_7-D5C6ioPCw",
    title: "unsplash_7-D5C6ioPCw",
  },

  {
    image: "/photos/unsplash_8ezfg5oYHNY.png",
    id: "unsplash_8ezfg5oYHNY",
    title: "unsplash_8ezfg5oYHNY",
  },

  {
    image: "/photos/unsplash_Ah_5-iQCCSw.png",
    id: "unsplash_Ah_5-iQCCSw",
    title: "unsplash_Ah_5-iQCCSw",
  },

  {
    image: "/photos/unsplash_BOhDR9n4u2s.png",
    id: "unsplash_BOhDR9n4u2s",
    title: "unsplash_BOhDR9n4u2s",
  },

  {
    image: "/photos/unsplash_EHAn0csi6-E.png",
    id: "unsplash_EHAn0csi6-E",
    title: "unsplash_EHAn0csi6-E",
  },

  {
    image: "/photos/unsplash_ExjpauryqzA.png",
    id: "unsplash_ExjpauryqzA",
    title: "unsplash_ExjpauryqzA",
  },

  {
    image: "/photos/unsplash_HabFYy1Iic0.png",
    id: "unsplash_HabFYy1Iic0",
    title: "unsplash_HabFYy1Iic0",
  },

  {
    image: "/photos/unsplash_IfjHaIoAoqE.png",
    id: "unsplash_IfjHaIoAoqE",
    title: "unsplash_IfjHaIoAoqE",
  },

  {
    image: "/photos/unsplash_JFAPl7brL6U.png",
    id: "unsplash_JFAPl7brL6U",
    title: "unsplash_JFAPl7brL6U",
  },

  {
    image: "/photos/unsplash_NSVJAAXOYHs.png",
    id: "unsplash_NSVJAAXOYHs",
    title: "unsplash_NSVJAAXOYHs",
  },

  {
    image: "/photos/unsplash_NYqEk7a42yc.png",
    id: "unsplash_NYqEk7a42yc",
    title: "unsplash_NYqEk7a42yc",
  },

  {
    image: "/photos/unsplash_Q9IotyAz3RY.png",
    id: "unsplash_Q9IotyAz3RY",
    title: "unsplash_Q9IotyAz3RY",
  },

  {
    image: "/photos/unsplash_R2txNeMEs_I.png",
    id: "unsplash_R2txNeMEs_I",
    title: "unsplash_R2txNeMEs_I",
  },

  {
    image: "/photos/unsplash_RHAtRIT3-CE.png",
    id: "unsplash_RHAtRIT3-CE",
    title: "unsplash_RHAtRIT3-CE",
  },

  {
    image: "/photos/unsplash_XySWtbETa1M.png",
    id: "unsplash_XySWtbETa1M",
    title: "unsplash_XySWtbETa1M",
  },

  {
    image: "/photos/unsplash_Y6RATd1xgyc.png",
    id: "unsplash_Y6RATd1xgyc",
    title: "unsplash_Y6RATd1xgyc",
  },

  {
    image: "/photos/unsplash_eg-72fI9wK4.png",
    id: "unsplash_eg-72fI9wK4",
    title: "unsplash_eg-72fI9wK4",
  },

  {
    image: "/photos/unsplash_gaUb54H8UEc.png",
    id: "unsplash_gaUb54H8UEc",
    title: "unsplash_gaUb54H8UEc",
  },

  {
    image: "/photos/unsplash_jNpttMRlb_Y.png",
    id: "unsplash_jNpttMRlb_Y",
    title: "unsplash_jNpttMRlb_Y",
  },

  {
    image: "/photos/unsplash_jpiiDziFagQ.png",
    id: "unsplash_jpiiDziFagQ",
    title: "unsplash_jpiiDziFagQ",
  },

  {
    image: "/photos/unsplash_pU_A9uhqcBU.png",
    id: "unsplash_pU_A9uhqcBU",
    title: "unsplash_pU_A9uhqcBU",
  },

  {
    image: "/photos/unsplash_rGHO4XSF0Qk.png",
    id: "unsplash_rGHO4XSF0Qk",
    title: "unsplash_rGHO4XSF0Qk",
  },
];

const galleryExample = [
    {
        image: "/public/gallery_example.png",
        id: "gallery_example.png",
        title: "Como se ve la galería",
    },
    {
        image: "/public/gallery_example2.png",
        id: "gallery_example2.png",
        title: "Como se ve la galería 2",
    },
]

const Home = () => {
  return (
    <div>
      <SwiperPics pics={photos.map((ph) => ph.image)} />
    </div>
  );
};


    return (
        <div>

            <SwiperPics pics={photos.map(ph => ph.image)} />

            <h2 className='p-3 my-10 Tenor-Sans text-3xl text-center'>GALERÍAS PROFESIONALES PARA FOTÓGRAFOS</h2>

            <div className='flex flex-col gap-12 p-3 mx-6 my-6'>
                <div className='flex justify-evenly items-center gap-4'>

                    <img className='max-w-2xl' src="/gallery_example.png" alt="#" />

                    {/* <SwiperPics pics={galleryExample} /> */}

                    <div className='max-w-2xl'>

                        <h3
                            className='text-xl font-bold w-full Tenor-Sans text-center m-3'
                        >
                            CREA TU GALERÍA
                        </h3>

                        <p className='Tenor-Sans text-center p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, accusamus ratione veritatis ipsum cum ea itaque doloribus sed quisquam nulla dignissimos commodi rerum odit at reprehenderit consequuntur dolores illum blanditiis.</p>

                    </div>
                </div>
                <div className='flex justify-evenly items-center gap-4'>
                    <div className='max-w-2xl'>

                        <h3
                            className='text-xl font-bold w-full Tenor-Sans text-center m-3'
                        >
                            ADMINISTRA TUS CLIENTES
                        </h3>

                        <p className='Tenor-Sans text-center p-5 px-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laudantium vero iure alias quasi enim sunt a commodi aut, labore, eum perspiciatis exercitationem neque. Cum ratione culpa dolores facilis quaerat?</p>

                    </div>
                    <img className='max-w-2xl' src="/clients_example1.png" alt="#" />
                </div>
            </div>
        </div >

    )
}

export default Home;
