import React from "react";
import { Card } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";

import { Gallery } from "../../../api/gallery.js";
import { modifyPhoto } from "../../../helper/modifyPhoto.js";
import { PATHS } from "../../../routes/paths.js";

const customeTheme = {
    root: {
        base: "flex rounded-lg border border-gray-200 bg-white shadow-xl min-w-96",
        children: "flex  flex-col justify-center gap-4 p-2",
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


function CardGallery2({ id }) {

    const [gallery, setGallery] = useState({})

    useEffect(() => {

        const gallery = new Gallery();

        (async () => {
            const currentGallery = await gallery.getById(id);
            setGallery(currentGallery.gallery)
        })()

    }, [])



    return (
        <Card
            className="max-w-sm p-4"
            theme={customeTheme}
            imgAlt="Imagen"
            imgSrc={!!gallery?.photos && modifyPhoto(gallery.photos[0])}
        >
            <div className=" Be-Vietnam-Pro flex items-center justify-between">
                <div className="w-full text-center flex justify-center">
                    <a href={`${PATHS.privates.galleries}/${id}`}>
                        <h5 className="mt-2 text-base font-medium tracking-tight text-gray-900 ">
                            {gallery?.title?.toUpperCase()}
                        </h5>
                    </a>
                </div>
            </div>
        </Card >
    );
}

export default CardGallery2;
