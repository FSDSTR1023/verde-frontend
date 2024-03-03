import React from "react";
import { Card } from "flowbite-react";
import { useEffect } from "react";
import { Client } from "../../api/client";
import { useState } from "react";
import { modifyPhoto } from "../../helper/modifyPhoto.js"
import { PATHS } from "../../routes/paths.js";
import { Link } from 'react-router-dom';

const customeTheme = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-xl w-96",
    children: "flex  flex-col justify-center gap-4 p-3",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 ",
  },
  img: {
    base: "",
    horizontal: {
      off: "h-48 w-full rounded-none object-cover",
      on: "h-96 w-full rounded-none  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};

const CardGallery = ({ gallery, isWatched }) => {

  const [client, setClient] = useState({})

  useEffect(() => {

    const client = new Client();

    (async () => {
      const currenClient = await client.getById(gallery.client);
      setClient(prev => currenClient);
    })()

  }, [])

  return (
    <Link to={`${PATHS.privates.galleries}/${gallery._id}`}>
      <Card
        className="max-w-sm p-4"
        theme={customeTheme}
        imgAlt="Imagen"
        imgSrc={gallery.photos[0] ? modifyPhoto(gallery.photos[0]) : "/blanco.png"}
      >
        <div className=" Be-Vietnam-Pro flex items-center justify-between">
          <div>
            <h5 className="mb-2 mt-2 text-base font-medium tracking-tight text-gray-900 flex items-center gap-3">
              {gallery?.title.toUpperCase()}
              {isWatched && <span className="relative grid place-content-center h-5 w-5 rounded-full">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-200 opacity-35"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-200"></span>
              </span>}

            </h5>
            <p className="font-light text-sm mb-2">{client?.clientResponse?.name} {client?.clientResponse?.surname}</p>
            <p className="font-light text-sm">{client?.clientResponse?.email}</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
            >
              <path
                d="M10.0854 0.585449C9.96606 0.585449 9.84671 0.672012 9.7751 0.780215L7.53138 4.69718C7.48364 4.80538 7.36429 4.89195 7.22108 4.89195H3.85549C1.87433 4.89195 0.275085 6.34187 0.275085 8.13805V17.6816C0.275085 17.7898 0.370563 17.8764 0.48991 17.8764H19.1319C19.2512 17.8764 19.3467 17.7898 19.3467 17.6816V5.10835C19.3467 4.97851 19.2512 4.91359 19.1319 4.91359H17.1985C17.0791 4.91359 16.9598 4.82702 16.8882 4.71882L14.6445 0.801856C14.5728 0.693653 14.4774 0.60709 14.3342 0.60709H10.0138L10.0854 0.585449ZM3.90323 7.07766C4.57157 7.07766 5.0967 7.55375 5.0967 8.15969C5.0967 8.76563 4.57157 9.24172 3.90323 9.24172C3.23489 9.24172 2.70976 8.76563 2.70976 8.15969C2.70976 7.55375 3.23489 7.07766 3.90323 7.07766ZM12.2575 7.07766C14.8831 7.07766 17.0314 9.02532 17.0314 11.4058C17.0314 13.7863 14.8831 15.7339 12.2575 15.7339C9.63188 15.7339 7.48364 13.7863 7.48364 11.4058C7.48364 9.02532 9.63188 7.07766 12.2575 7.07766ZM12.2575 9.24172C10.9447 9.24172 9.87058 10.2156 9.87058 11.4058C9.87058 12.596 10.9447 13.5699 12.2575 13.5699C13.5703 13.5699 14.6445 12.596 14.6445 11.4058C14.6445 10.2156 13.5703 9.24172 12.2575 9.24172Z"
                fill="black"
                fillOpacity="0.57"
              />
            </svg>
            <span className="ml-2 font-light text-sm">{gallery.photos.length}</span>
          </div>
        </div>
      </Card >
    </Link>
  );
}

export default CardGallery;
