import React from "react";
import { useContext } from 'react';
import AuthProvider, { AuthContext } from '../contexts/auth/auth.context';
import useAuthContext from '../hooks/useAuthContext';

const LogIn = () => {

  const { isAuth, login } = useAuthContext();

  console.log("🚨", { isAuth, login });

  const submitHandle = async (e) => {

    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    const data = {
      email,
      password
    }

    login(data)

  }

  return (
    <div className=" mt-28 max-w-xl  mx-auto xl:max-w-5xl h-full flex bg-white rounded-lg shadow">
      <div className="min-w-1/2 hidden xl:block">
        <img src="/img/ImagenLogIn.png" className="h-full object-cover" />
      </div>

      <div className="w-full xl:w-1/2 p-8 flex justify-center items-center  ">
        <form onSubmit={submitHandle} className=" w-full max-w-md mx-auto ">
          <h4 className="Tenor-Sans flex justify-center text-3xl text-[#595959] tracking-widest ">
            LOG IN
          </h4>

          <div className="relative z-0 w-full my-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="top-5  block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="Be-Vietnam-Pro tracking-wide Be-Vietnam-Pro peer-focus:font-medium absolute text-sm text-[#7c7c7c91] duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>

          <div className="relative z-0 w-full my-5 group bg">
            <input
              type="password"
              name="password"
              id="password"
              className="top-5 block pb-2 pt-5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className=" tracking-wide Be-Vietnam-Pro peer-focus:font-medium absolute text-sm text-[#7c7c7c91] duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              contraseña
            </label>
          </div>

          <button
            type="submit"
            className="tracking-widest Be-Vietnam-Pro w-full text-white bg-[#595959] hover:bg-[#C7C7C7] focus:ring-4 focus:outline-none  font-medium rounded-lg text-base my-5 mt-8 px-5 py-2.5 text-center"
          >
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
