import React from "react";
import { Card } from "flowbite-react";
import { modifyPhoto } from "../../../helper/modifyPhoto.js";
import { PATHS } from "../../../routes/paths.js";
import { Link } from 'react-router-dom';

const customeTheme = {
    root: {
        base: "flex rounded-lg border border-gray-200 bg-white shadow-xl min-w-64 max-h-52",
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
            on: "h-96 w-full rounded-none",
        },
    },
};


function CardGallery2({ gal }) {

    return (
        <Link to={`${PATHS.privates.galleries}/${gal?.id}`}>
            <Card
                className="max-w-sm p-4 h-"
                theme={customeTheme}
                imgAlt="Imagen"
                imgSrc={!!gal?.photos && modifyPhoto(gal.photos[0])}
            >
                <div className=" Be-Vietnam-Pro flex items-center justify-between">
                    <div className="w-full text-center flex justify-center">
                        <h5 className="mt-2 text-base font-medium tracking-tight text-gray-900 ">
                            {gal?.title?.toUpperCase()}
                        </h5>
                    </div>
                </div>
            </Card >
        </Link>
    );
}

export default CardGallery2;
