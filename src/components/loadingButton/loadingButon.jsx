import React from "react";
import { Button, Spinner } from "flowbite-react";

const LoadingButon = ({ children }) => {
  return (
    <button
      disabled
      className="w-full bg-[#C7C7C7]  focus:ring-4 focus:outline-none hover:cursor-wait font-medium rounded-lg text-base my-7 px-5 py-2.5 text-center "
    >
      <span className=" text-white">{children}</span>
      <Spinner
        className="ml-2"
        aria-label="Alternate spinner button example"
        size="sm"
      />
    </button>
  );
};

export default LoadingButon;
