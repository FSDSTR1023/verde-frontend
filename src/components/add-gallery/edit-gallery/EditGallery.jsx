import { useState } from "react";
import { useGetClients } from "../../../hooks/useGetClients";
import { useNavigate } from "react-router-dom";
import { Gallery } from "../../../api/gallery";

const EditGallery = ({ prevTitle, prevMinPics, prevTotalPrice, prevClientId, galleryId }) => {
    const { clients } = useGetClients([]);
    const [clientSelected, setClientSelected] = useState(prevClientId);
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


        const data = {
            title: title.value,
            client: client.value,
            minPics: minPics.value,
            totalPrice: totalPrice.value,
        };

        console.log(data)

        const gallery = new Gallery();
        await gallery.editGallery(galleryId, data);
        navigate(0);
    };

    return (
        <form onSubmit={SubmitHandel} className="max-w-md mx-auto">
            <h5 className="Tenor-Sans text-xl font-normal tracking-widest">DATOS</h5>

            <div className="relative z-0 w-full my-2 group ">
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="top-5 block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                    required
                    defaultValue={prevTitle}
                />
                <label
                    htmlFor="title"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Nombre de la galería
                </label>
            </div>

            <div className="relative z-0 w-full mt-6 group bg">
                <label htmlFor="client" className="text-xs text-gray-500">
                    Elige un cliente
                </label>

                <select
                    value={clientSelected}
                    onChange={(e) => setClientSelected(e.target.value)}
                    required
                    id="client"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-4"
                >
                    {clients.map((c) => (

                        // (c._id === prevClientId)
                        //     ? <option selected key={c._id} value={c._id}>
                        //         {c.name} - {c.email}
                        //     </option>
                        //     :
                        <option key={c._id} value={c._id}>
                            {c.name} - {c.email}
                        </option>
                    )).reverse()}
                </select>
            </div>

            <h5 className="Tenor-Sans text-xl font-normal tracking-widest mt-8">
                CONFIGURACIÓN
            </h5>

            <div className="relative z-0 w-full my-2 group bg">
                <input
                    type="number"
                    name="minPics"
                    id="minPics"
                    className="top-5 block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                    required
                    defaultValue={prevMinPics}
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
                    type="number"
                    name="totalPrice"
                    id="totalPrice"
                    className="top-5 block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                    required
                    defaultValue={prevTotalPrice}
                />
                <label
                    htmlFor="totalPrice"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Precio galería completa
                </label>
            </div>

            <button
                type="submit"
                className=" w-full text-white bg-[#D9D9D9] hover:bg-[#C7C7C7] focus:ring-4 focus:outline-none  font-medium rounded-lg text-base my-7 px-5 py-2.5 text-center "

            >
                EDITAR
            </button>

        </form>
    );
};

export default EditGallery;

//