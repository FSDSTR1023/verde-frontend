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

const Home = () => {
  return (
    <div>
      <SwiperPics pics={photos.map((ph) => ph.image)} />
    </div>
  );
};

export default Home;
