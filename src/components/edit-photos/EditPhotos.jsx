import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlPhotoC } from "../../helper/urlphotoClaud";
import { Gallery } from "../../api/gallery";
import { MyDropzone } from "../add-gallery/drop-zone/MyDropzone";
import LoadingButon from "../loadingButton/loadingButon";

const EdithPhotos = ({ id }) => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoadin] = useState(false);
    const navigate = useNavigate();

    const SubmitHandel = async (e) => {
        e.preventDefault();

        setIsLoadin((prev) => true);
        const urlPhotoClaud = await urlPhotoC(photos);

        const photosToBack = urlPhotoClaud.map(url => url ?? "https://res.cloudinary.com/ddre5ln9t/image/upload/v1707667398/bmdngs4qqtk1cgiqq03x.png");

        const data = {
            photos: photosToBack,
        };

        const gallery = new Gallery();
        await gallery.addPhoto(id, data);
        setIsLoadin((prev) => false);
        navigate(0);
    };

    const deletePhoto = (path) => {
        const newArr = photos.filter((ph) => ph.path !== path);
        setPhotos((prev) => newArr);
    };

    return (
        <form onSubmit={SubmitHandel} className="max-w-md mx-auto">

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
                    AÑADIR
                </button>
            )}
        </form>
    );
};

export default EdithPhotos;

//