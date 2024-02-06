import React from "react";
import CardGallery from "../components/card-gallery/CardGallery";
import { Fab } from "../components/fab/Fab";
import AddClient from "../components/add-client-form/AddClient";
import AddGallery from "../components/add-gallery/AddGallery";

function Galleries() {
  return (
    <div className="relative">
      <div className="flex flex-wrap m-10 gap-10 justify-center">
        <CardGallery />
        <CardGallery />
        <CardGallery />
        <CardGallery />
        <CardGallery />
        <CardGallery />
        <CardGallery />
        <CardGallery />
      </div>
      <Fab
        toShow={<AddGallery />}
        className="rounded-full fixed bottom-6 right-12 h-11 w-11 flex items-center justify-center shadow shadow-[#00000054] border bg-[#F5F5F5] hover:cursor-pointer"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="#D9D9D9"
            className="w-8 h-8"
          >
            <path d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        }
      />
    </div>
  );
}

export default Galleries;
