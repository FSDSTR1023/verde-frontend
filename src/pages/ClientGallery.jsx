import React from "react";
import SwiperPics from "../components/swiper-pics/SwiperPics";
import { ActionBarClient } from "../components/action-bar-client/ActionBarClient";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Gallery } from "../api/gallery";
import { modifyPhoto, toClient } from "../helper/modifyPhoto";

const ClientGallery = () => {
  const { photographerId, clientId, galleryId } = useParams();

  const [gallery, setGallery] = useState({});
  const [buyPhotos, setBuyPhotos] = useState([]);

  // console.log({ photographerId })
  // console.log({ clientId })
  // console.log({ galleryId })

  useEffect(() => {
    (async () => {
      const galleryResponse = await Gallery.getById(galleryId);
      setGallery((prev) => galleryResponse.gallery);
    })();
  }, []);

  const checkHandel = (e, p) => {
    if (e.target.checked) {
      setBuyPhotos((prev) => [...prev, p]);
      return;
    }

    if (!e.target.checked) {
      const newArray = buyPhotos.filter((elem) => elem !== p);
      setBuyPhotos((prev) => newArray);
    }
  };
  function selectAll() {
    if (buyPhotos.length === gallery?.photos?.length) {
      setBuyPhotos([]);
      return;
    }
    setBuyPhotos(gallery.photos);
  }

  return (
    <div className="h-screen overflow-y-scroll bg-[#F5F5F5]">
      {gallery?.photos?.length && (
        <SwiperPics pics={gallery?.photos} objectFit="contain" />
      )}
      <ActionBarClient
        left={[
          {
            id: "1",
            IconOrButton: (
              <span size="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M14.75 0C16.5449 0 18 1.45507 18 3.25V14.75C18 16.5449 16.5449 18 14.75 18H3.25C1.45507 18 0 16.5449 0 14.75V3.25C0 1.45507 1.45507 0 3.25 0H14.75ZM15.3305 16.4014L9.5247 10.7148C9.2596 10.4553 8.8501 10.4316 8.5588 10.644L8.4752 10.7148L2.66845 16.4011C2.8504 16.4651 3.04613 16.5 3.25 16.5H14.75C14.9535 16.5 15.1489 16.4653 15.3305 16.4014ZM14.75 1.5H3.25C2.2835 1.5 1.5 2.2835 1.5 3.25V14.75C1.5 14.9584 1.53643 15.1583 1.60326 15.3437L7.4258 9.643C8.2589 8.8273 9.5675 8.7885 10.4458 9.5266L10.5742 9.6431L16.3964 15.3447C16.4634 15.159 16.5 14.9588 16.5 14.75V3.25C16.5 2.2835 15.7165 1.5 14.75 1.5ZM12.2521 3.5C13.4959 3.5 14.5042 4.50831 14.5042 5.75212C14.5042 6.99592 13.4959 8.0042 12.2521 8.0042C11.0083 8.0042 10 6.99592 10 5.75212C10 4.50831 11.0083 3.5 12.2521 3.5ZM12.2521 5C11.8367 5 11.5 5.33673 11.5 5.75212C11.5 6.1675 11.8367 6.50423 12.2521 6.50423C12.6675 6.50423 13.0042 6.1675 13.0042 5.75212C13.0042 5.33673 12.6675 5 12.2521 5Z"
                    fill="#212121"
                  />
                </svg>
              </span>
            ),
            text: `${gallery?.singlePrice} €/foto`,
          },
          {
            id: "2",
            IconOrButton: (
              <span size="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.8199 5.57912L11.9992 6.40163L11.1759 5.57838C9.07688 3.47931 5.67361 3.47931 3.57455 5.57838C1.47548 7.67744 1.47548 11.0807 3.57455 13.1798L11.4699 21.0751C11.7628 21.368 12.2377 21.368 12.5306 21.0751L20.432 13.1783C22.5264 11.0723 22.53 7.67857 20.4306 5.57912C18.3277 3.47623 14.9228 3.47623 12.8199 5.57912ZM19.3684 12.1206L12.0002 19.4842L4.63521 12.1191C3.12192 10.6058 3.12192 8.15232 4.63521 6.63904C6.14849 5.12575 8.602 5.12575 10.1153 6.63904L11.4727 7.99648C11.7706 8.29435 12.2553 8.28854 12.5459 7.98363L13.8806 6.63978C15.3977 5.12268 17.8528 5.12268 19.3699 6.63978C20.8836 8.15343 20.881 10.5997 19.3684 12.1206Z"
                    fill="#212121"
                  />
                </svg>
              </span>
            ),
            text: `mínimo ${gallery?.minPics} fotos`,
          },
        ]}
        right={[
          {
            id: "5",
            IconOrButton: (
              <button
                className="flex gap-2 items-center hover:shadow py-2 px-4 rounded transition-all duration-200 active:shadow-none active:scale-95 my-1 disabled:text-gray-300"
                onClick={selectAll}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>

                {`Galería completa ${gallery?.totalPrice} €`}
              </button>
            ),
          },
          {
            id: "3",
            IconOrButton: (
              <span size="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2.5 4.25C2.5 3.83579 2.83579 3.5 3.25 3.5H3.80826C4.75873 3.5 5.32782 4.13899 5.65325 4.73299C5.87016 5.12894 6.02708 5.58818 6.14982 6.00395C6.18306 6.00134 6.21674 6 6.2508 6H18.7481C19.5783 6 20.1778 6.79442 19.9502 7.5928L18.1224 14.0019C17.7856 15.1832 16.7062 15.9978 15.4779 15.9978H9.52977C8.29128 15.9978 7.2056 15.1699 6.87783 13.9756L6.11734 11.2045L4.85874 6.95578L4.8567 6.94834C4.701 6.38051 4.55487 5.85005 4.33773 5.4537C4.12686 5.0688 3.95877 5 3.80826 5H3.25C2.83579 5 2.5 4.66421 2.5 4.25ZM7.57283 10.8403L8.32434 13.5786C8.47333 14.1215 8.96682 14.4978 9.52977 14.4978H15.4779C16.0362 14.4978 16.5268 14.1275 16.68 13.5906L18.4168 7.5H6.58549L7.55906 10.7868C7.56434 10.8046 7.56892 10.8224 7.57283 10.8403ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19ZM9.5 19C9.5 18.7239 9.27614 18.5 9 18.5C8.72386 18.5 8.5 18.7239 8.5 19C8.5 19.2761 8.72386 19.5 9 19.5C9.27614 19.5 9.5 19.2761 9.5 19ZM18 19C18 20.1046 17.1046 21 16 21C14.8954 21 14 20.1046 14 19C14 17.8954 14.8954 17 16 17C17.1046 17 18 17.8954 18 19ZM16.5 19C16.5 18.7239 16.2761 18.5 16 18.5C15.7239 18.5 15.5 18.7239 15.5 19C15.5 19.2761 15.7239 19.5 16 19.5C16.2761 19.5 16.5 19.2761 16.5 19Z"
                    fill="#212121"
                  />
                </svg>
              </span>
            ),
            text: `Total a pagar ${
              (buyPhotos.length === gallery?.photos?.length
                ? gallery?.totalPrice
                : parseInt(gallery?.singlePrice) * buyPhotos.length) >=
              gallery?.totalPrice
                ? gallery?.totalPrice
                : parseInt(gallery?.singlePrice) * buyPhotos.length
            }€`,
          },
          {
            id: "4",
            IconOrButton: (
              <button
                className="flex gap-2 items-center hover:shadow py-2 px-4 rounded transition-all duration-200 active:shadow-none active:scale-95 my-1 disabled:text-gray-300"
                disabled={gallery?.minPics > buyPhotos.length}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.69362 11.9997L2.29933 3.2715C2.0631 2.66403 2.65544 2.08309 3.2414 2.28959L3.33375 2.32885L21.3337 11.3288C21.852 11.588 21.8844 12.2975 21.4309 12.6129L21.3337 12.6705L3.33375 21.6705C2.75077 21.962 2.11746 21.426 2.2688 20.8234L2.29933 20.7278L5.69362 11.9997ZM4.4021 4.54007L7.01109 11.2491L13.6387 11.2497C14.0184 11.2497 14.3322 11.5318 14.3818 11.8979L14.3887 11.9997C14.3887 12.3794 14.1065 12.6932 13.7404 12.7428L13.6387 12.7497L7.01109 12.7491L4.4021 19.4593L19.3213 11.9997L4.4021 4.54007Z"
                    fill={
                      gallery?.minPics > buyPhotos.length
                        ? "#d1d5db"
                        : "#212121"
                    }
                  />
                </svg>
                {gallery?.minPics > buyPhotos.length
                  ? "Selecciona más fotos"
                  : "Enviar Selección"}
              </button>
            ),
          },
        ]}
      />

      {/* <DisplayListImages pics={pics} /> */}

      <Masonry
        breakpointCols={4}
        className="flex w-auto"
        columnClassName="pl-2 bg-clip-padding"
      >
        {gallery?.photos?.map((p) => (
          <div key={p} className="relative">
            <input
              className="absolute right-2 top-2 size-5"
              type="checkbox"
              onChange={(e) => checkHandel(e, p)}
              checked={buyPhotos.includes(p)}
            />
            <a href={p} target="_blank">
              <img
                className="h-auto w-full border mb-2"
                src={p}
                alt={p}
                loading="lazy"
              />
            </a>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ClientGallery;
