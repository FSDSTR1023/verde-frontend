import React from "react";
import { MyDropzone } from "./drop-zone/MyDropzone.jsx";
import { useState } from "react";
import { useGetClients } from "../../hooks/useGetClients.js";
import { Gallery } from "../../api/gallery.js";
import { urlPhotoC } from "../../helper/urlphotoClaud.js";
import LoadingButon from "../loadingButton/loadingButon.jsx";
import { useNavigate } from "react-router-dom";

const AddGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoadin] = useState(false);
  const { clients } = useGetClients([]);
  const navigate = useNavigate();

  const SubmitHandel = async (e) => {
    e.preventDefault();

    const { title, client, minPics, totalPrice } = e.target;

    if (
      !title.value
      || !client.value
      || !minPics.value
      || !totalPrice.value
    ) {
      return;
    }

    setIsLoadin((prev) => true);
    const urlPhotoClaud = await urlPhotoC(photos);

    const data = {
      title: title.value,
      client: client.value,
      minPics: minPics.value,
      totalPrice: totalPrice.value,
      photos: urlPhotoClaud,
    };

    const gallery = new Gallery();
    await gallery.create(data);
    setIsLoadin((prev) => false);
    navigate(0);
  };

  const deletePhoto = (path) => {
    const newArr = photos.filter((ph) => ph.path !== path);
    setPhotos((prev) => newArr);
  };

  return (
    <form onSubmit={SubmitHandel} className="max-w-md mx-auto">
      <h5 className="Tenor-Sans text-xl font-normal tracking-widest">DATOS</h5>

      <div className="relative z-0 w-full my-2 group ">
        <input
          disabled={isLoading}
          type="text"
          name="title"
          id="title"
          className="top-5 block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          required
        />
        <label
          htmlFor="title"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Nombe de la galería
        </label>
      </div>

      <div className="relative z-0 w-full mt-6 group bg">
        <label htmlFor="client" className="text-xs text-gray-500">
          Elige un cliente
        </label>

        <select
          disabled={isLoading}
          required
          id="client"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-4"
        >
          <option value=''>Clientes</option>
          {clients.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name} - {c.email}
            </option>
          ))}
        </select>
      </div>

      <h5 className="Tenor-Sans text-xl font-normal tracking-widest mt-8">
        CONFIGURACIÓN
      </h5>

      <div className="relative z-0 w-full my-2 group bg">
        <input
          disabled={isLoading}
          type="number"
          name="minPics"
          id="minPics"
          className="top-5 block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          required
        />
        <label
          htmlFor="minPics"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Números de fotos a seleccionar por el ciente
        </label>
      </div>

      <div className="relative z-0 w-full my-2 group bg">
        <input
          disabled={isLoading}
          type="number"
          name="totalPrice"
          id="totalPrice"
          className="top-5 block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          required
        />
        <label
          htmlFor="totalPrice"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Precio galería completa
        </label>
      </div>

      <h5 className="Tenor-Sans text-xl font-normal tracking-widest mt-10 mb-6">
        IMÁGENES
      </h5>

      <MyDropzone setPhotos={setPhotos} currentPhotos={photos} isLoading={isLoading} />

      {!!photos && (
        <ul className="max-h-28 overflow-auto">
          {photos.reverse().map((ph) => (
            <li className="m-1 p-2 flex gap-2 items-center" key={ph.path}>
              📸 - {ph.name}
              {
                isLoading || <svg
                  className="cursor-pointer text-[#7C7C7C] font-extrabold text-xl Tenor-Sans items-center w-6 h-6"
                  onClick={() => deletePhoto(ph.path)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#7C7C7C"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              }
            </li>
          ))}
        </ul>
      )}

      {isLoading ? (
        <LoadingButon>SUBIENDO IMÁGENES</LoadingButon>
      ) : (
        <button
          type="submit"
          className=" w-full text-white bg-[#D9D9D9] hover:bg-[#C7C7C7] focus:ring-4 focus:outline-none  font-medium rounded-lg text-base my-7 px-5 py-2.5 text-center "

        >
          CREAR
        </button>
      )}
    </form>
  );
};

export default AddGallery;
