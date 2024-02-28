import React from "react";
import CardGallery from "../components/card-gallery/CardGallery";
import { Fab } from "../components/fab/Fab";
import AddGallery from "../components/add-gallery/AddGallery";
import { useEffect } from "react";
import { Gallery } from "../api/gallery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Galleries() {

  const [galleries, setGalleries] = useState([]);
  const [toDelete, setToDelete] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const gallery = new Gallery();

    (async () => {
      const galleries = (await gallery.getAll()).galeries;
      setGalleries(prev => galleries);
    })()
  }, [])

  const checkHandel = (e, id) => {

    if (e.target.checked) {
      setToDelete(prev => [...prev, id]);
      return
    }

    if (!e.target.checked) {
      const newArray = toDelete.filter(elem => elem !== id)
      setToDelete(prev => newArray)
    }

  }

  const delGallery = async () => {

    const gallery = new Gallery();

    await gallery.deleteGallery({ ids: toDelete });

    navigate(0);
  }

  return (
    <div className="relative">
      {
        toDelete.length > 0 &&
        <svg onClick={delGallery} className="absolute size-6 right-6 top-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M6 2.46021H9C9 1.68379 8.32845 1.05438 7.5 1.05438C6.67155 1.05438 6 1.68379 6 2.46021ZM4.875 2.46021C4.875 1.10147 6.05025 0 7.5 0C8.94975 0 10.125 1.10147 10.125 2.46021H14.4375C14.7481 2.46021 15 2.69624 15 2.9874C15 3.27856 14.7481 3.51459 14.4375 3.51459H13.4482L12.5692 12.0278C12.4297 13.3789 11.2181 14.4098 9.76973 14.4098H5.23027C3.78191 14.4098 2.57036 13.3789 2.43085 12.0278L1.55181 3.51459H0.5625C0.251842 3.51459 0 3.27856 0 2.9874C0 2.69624 0.251842 2.46021 0.5625 2.46021H4.875ZM6.375 5.79907C6.375 5.50792 6.12315 5.27188 5.8125 5.27188C5.50184 5.27188 5.25 5.50792 5.25 5.79907V11.071C5.25 11.3621 5.50184 11.5981 5.8125 11.5981C6.12315 11.5981 6.375 11.3621 6.375 11.071V5.79907ZM9.1875 5.27188C9.49815 5.27188 9.75 5.50792 9.75 5.79907V11.071C9.75 11.3621 9.49815 11.5981 9.1875 11.5981C8.87685 11.5981 8.625 11.3621 8.625 11.071V5.79907C8.625 5.50792 8.87685 5.27188 9.1875 5.27188ZM3.55062 11.9262C3.63433 12.7369 4.36125 13.3554 5.23027 13.3554H9.76973C10.6388 13.3554 11.3657 12.7369 11.4494 11.9262L12.3179 3.51459H2.68206L3.55062 11.9262Z" fill="#7C7C7C" />
        </svg>
      }

      <div className="flex flex-wrap m-10 gap-10 justify-center">

        {
          !!galleries.length
            ?
            galleries?.map(g => <div key={g._id} className="relative">
              <input
                className="absolute right-7 bottom-7 size-5"
                type="checkbox"
                onChange={(e) => checkHandel(e, g._id)}
                name=""
                id=""
              />
              <CardGallery gallery={g} />
            </div>).reverse()
            : <div className="flex items-center h-[80vh]">
              <h1 className="text-[#C1C1C1] Be-Vietnam-Pro text-xl">
                Crea tu primera galería...
              </h1>
            </div>
        }

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
