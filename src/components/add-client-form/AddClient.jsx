import { useNavigate } from 'react-router-dom';
import { Client } from '../../api/client.js';
import { Photographer } from '../../api/photographer.js'

const AddClient = () => {

  const navigate = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault();
    const { name, surname, email, phone, address } = e.target;

    const data = {
      name: name.value,
      surname: surname.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
    }

    const client = new Client();

    await client.register(data);

    navigate(0);
  };

  new Photographer();
  return (
    <form onSubmit={submitHandle} className="max-w-md mx-auto">
      <h4 className="Tenor-Sans flex justify-center text-3xl text-[#7C7C7C] tracking-widest">
        NUEVO CLIENTE
      </h4>

      <div className="relative z-0 w-full my-5 group ">
        <input
          type="text"
          name="name"
          id="name"
          className="top-5  block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          required
        />
        <label
          htmlFor="name"
          className="Be-Vietnam-Pro tracking-wide Be-Vietnam-Pro peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Nombre
        </label>
      </div>
      <div className="relative z-0 w-full my-5 group bg">
        <input
          type="text"
          name="surname"
          id="surname"
          className="top-5 block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          required
        />
        <label
          htmlFor="surname"
          className=" tracking-wide Be-Vietnam-Pro peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Apellido
        </label>
      </div>

      <div className="relative z-0 w-full my-5 group bg">
        <input
          type="email"
          name="email"
          id="email"
          className="top-5 block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          required
        />
        <label
          htmlFor="email"
          className=" tracking-wide Be-Vietnam-Pro peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>
      <div className="relative z-0 w-full my-5 group bg">
        <input
          type="tel"
          name="phone"
          id="phone"
          className="top-5 block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          required
        />
        <label
          htmlFor="phone"
          className="tracking-wide Be-Vietnam-Pro peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Teléfono
        </label>
      </div>
      <div className="relative z-0 w-full my-5 group bg">
        <input
          type="text"
          name="address"
          id="address"
          className="top-5 block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
          required
        />
        <label
          htmlFor="address"
          className="tracking-wide Be-Vietnam-Pro peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Dirección
        </label>
      </div>

      <button
        type="submit"
        className="tracking-widest Be-Vietnam-Pro w-full text-white bg-[#D9D9D9] hover:bg-[#C7C7C7] focus:ring-4 focus:outline-none  font-medium rounded-lg text-base my-5 px-5 py-2.5 text-center"
      >
        CREAR
      </button>
    </form>
  );
};

export default AddClient;
