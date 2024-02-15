import React from "react";
import Masonry from "react-masonry-css";
import { ActionBarClient } from "../components/action-bar-client/ActionBarClient";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Gallery } from "../api/gallery";
import { useState } from "react";
import { modifyPhoto } from "../helper/modifyPhoto";
import { Fab } from "../components/fab/Fab";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AddGallery from "../components/add-gallery/AddGallery";
import EdithPhotos from "../components/edit-photos/EditPhotos";

function OpenGallery() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [gal, setGal] = useState({});
  const [newGal, setNewGal] = useState([]);

  useEffect(() => {
    const gallery = new Gallery();
    (async () => {
      const currentGallery = await gallery.getById(id);
      setGal((prev) => currentGallery.gallery);
      setNewGal((prev) => currentGallery.gallery.photos);
    })();
  }, []);

  const checkHandel = (e, p) => {
    if (!e.target.checked) {
      setNewGal((prev) => [...prev, p]);
      return;
    }

    if (e.target.checked) {
      const newArray = newGal.filter((elem) => elem !== p);
      setNewGal((prev) => newArray);
    }
  };

  const deleteElem = async () => {
    const gallery = new Gallery();

    const newGallery = await gallery.deletePhotos(id, { newGal });

    console.log(newGallery);

    navigate(0);
  };

  // console.log(newGal);

  return (
    <div>
      <div className="flex justify-between p-10 items-center flex-wrap">
        <a
          href={
            gal?.photos
              ? modifyPhoto(gal?.photos[0], false, "auto", "auto:best")
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="max-w-md w-full"
            src={
              gal?.photos?.length > 0
                ? modifyPhoto(gal?.photos[0])
                : "/blanco.png"
            }
          />
        </a>

        <div className="flex flex-col text-right items-end h-full  p-4">
          <div className="flex items-center gap-1 justify-end text-lg Tenor-Sans tracking-wide">
            <h5>{gal?.title?.toUpperCase()}</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M13.0949 1.90506C12.2214 1.03161 10.8053 1.03165 9.93194 1.90516L2.46314 9.37481C2.20919 9.62881 2.03069 9.94825 1.9475 10.2976L1.26276 13.1736C1.22506 13.3319 1.2722 13.4985 1.3873 13.6136C1.50241 13.7287 1.66898 13.7758 1.82733 13.7381L4.70311 13.0534C5.05261 12.9702 5.37216 12.7916 5.62619 12.5376L13.095 5.06788C13.9683 4.19445 13.9683 2.77844 13.0949 1.90506ZM10.5949 2.56802C11.1021 2.06068 11.9247 2.06066 12.432 2.56797C12.9392 3.07525 12.9393 3.8977 12.4321 4.40501L11.875 4.96216L10.0379 3.12507L10.5949 2.56802ZM9.375 3.78802L11.2121 5.62511L4.96324 11.8747C4.8319 12.0061 4.66667 12.0984 4.48597 12.1414L2.35119 12.6497L2.85951 10.5148C2.90251 10.3341 2.9948 10.169 3.12609 10.0377L9.375 3.78802Z"
                fill="black"
                fillOpacity="0.57"
              />
            </svg>
          </div>

          <p className="Be-Vietnam-Pro tracking-wide text-base font-light text-[#000000b8] my-3">
            {gal?.client?.name}
          </p>
          <p className="Be-Vietnam-Pro tracking-wide text-base font-light text-[#000000b8] my-3">
            {gal?.client?.email}
          </p>
          <p className="Be-Vietnam-Pro tracking-wide text-base font-light text-[#000000b8] my-3">
            {gal?.client?.phone}
          </p>
          <div className="Be-Vietnam-Pro  font-light tracking-widest border hover:cursor-pointer rounded-full py-2 px-4 shadow text-center mt-2">
            ENVIAR
          </div>
        </div>
      </div>

      {/*  Barra de acciones */}

      <ActionBarClient
        right={[
          {
            id: "clientView",
            IconOrButton: (
              <a href={`/client/x/x/${id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    d="M9.00005 6.21311C10.6569 6.21311 12 7.44882 12 8.97309C12 10.4974 10.6569 11.7331 9.00005 11.7331C7.34317 11.7331 6.00002 10.4974 6.00002 8.97309C6.00002 7.44882 7.34317 6.21311 9.00005 6.21311ZM9.00005 7.2481C7.96452 7.2481 7.12502 8.02041 7.12502 8.97309C7.12502 9.92578 7.96452 10.6981 9.00005 10.6981C10.0356 10.6981 10.875 9.92578 10.875 8.97309C10.875 8.02041 10.0356 7.2481 9.00005 7.2481ZM9.00005 3.79492C12.4602 3.79492 15.4471 5.96843 16.2759 9.01436C16.3513 9.2916 16.1682 9.57264 15.8668 9.64205C15.5654 9.7114 15.26 9.54297 15.1845 9.26566C14.4804 6.67771 11.941 4.82992 9.00005 4.82992C6.05773 4.82992 3.5176 6.6793 2.81467 9.26883C2.7394 9.54607 2.43404 9.71471 2.13264 9.6455C1.83124 9.57622 1.64792 9.29533 1.72319 9.01801C2.55051 5.9703 5.53839 3.79492 9.00005 3.79492Z"
                    fill="#7C7C7C"
                  />
                </svg>
              </a>
            ),
          },
          {
            id: "addPic",
            IconOrButton: (
              <Fab
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M7.49704 0C7.82246 0 8.09149 0.226558 8.13408 0.520646L8.13999 0.602405L8.14102 6.42693H14.3572C14.7122 6.42693 15 6.6967 15 7.02946C15 7.3345 14.7581 7.58659 14.4445 7.62652L14.3572 7.63198H8.14102L8.14274 13.4557C8.14282 13.7884 7.85511 14.0584 7.50013 14.0584C7.17471 14.0584 6.90569 13.8318 6.86309 13.5377L6.85718 13.4559L6.85546 7.63198H0.64278C0.287777 7.63198 0 7.36221 0 7.02946C0 6.72442 0.241814 6.47232 0.555559 6.4324L0.64278 6.42693H6.85546L6.85443 0.602646C6.85435 0.269883 7.14206 0 7.49704 0Z"
                      fill="#7C7C7C"
                    />
                  </svg>
                }
                toShow={<EdithPhotos id={id} />}
              />
            ),
          },
          {
            id: "deletePic",
            IconOrButton: (
              <svg
                onClick={deleteElem}
                className="ml-10 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M6 2.46021H9C9 1.68379 8.32845 1.05438 7.5 1.05438C6.67155 1.05438 6 1.68379 6 2.46021ZM4.875 2.46021C4.875 1.10147 6.05025 0 7.5 0C8.94975 0 10.125 1.10147 10.125 2.46021H14.4375C14.7481 2.46021 15 2.69624 15 2.9874C15 3.27856 14.7481 3.51459 14.4375 3.51459H13.4482L12.5692 12.0278C12.4297 13.3789 11.2181 14.4098 9.76973 14.4098H5.23027C3.78191 14.4098 2.57036 13.3789 2.43085 12.0278L1.55181 3.51459H0.5625C0.251842 3.51459 0 3.27856 0 2.9874C0 2.69624 0.251842 2.46021 0.5625 2.46021H4.875ZM6.375 5.79907C6.375 5.50792 6.12315 5.27188 5.8125 5.27188C5.50184 5.27188 5.25 5.50792 5.25 5.79907V11.071C5.25 11.3621 5.50184 11.5981 5.8125 11.5981C6.12315 11.5981 6.375 11.3621 6.375 11.071V5.79907ZM9.1875 5.27188C9.49815 5.27188 9.75 5.50792 9.75 5.79907V11.071C9.75 11.3621 9.49815 11.5981 9.1875 11.5981C8.87685 11.5981 8.625 11.3621 8.625 11.071V5.79907C8.625 5.50792 8.87685 5.27188 9.1875 5.27188ZM3.55062 11.9262C3.63433 12.7369 4.36125 13.3554 5.23027 13.3554H9.76973C10.6388 13.3554 11.3657 12.7369 11.4494 11.9262L12.3179 3.51459H2.68206L3.55062 11.9262Z"
                  fill="#7C7C7C"
                />
              </svg>
            ),
          },
        ]}
      />

      {/* <input className="hidden" type="file" name="myInput" id="myInput" accept="image/png, image/jpeg, image/jpg" multiple onInput={(e) => console.log(e)} /> */}

      <Masonry
        breakpointCols={5}
        className="flex w-auto"
        columnClassName="pl-2 bg-clip-padding"
      >
        {gal?.photos?.map((p) => (
          <div key={p} className="relative">
            <input
              className="absolute right-2 top-2 size-5"
              type="checkbox"
              onChange={(e) => checkHandel(e, p)}
            />
            <a
              href={modifyPhoto(p, false, "auto", "auto:best")}
              target="_blank"
            >
              <img
                className="h-auto w-full border mb-2"
                src={modifyPhoto(p)}
                alt={p}
                loading="lazy"
              />
            </a>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default OpenGallery;
