const EndPage = () => {
  return (
    <div className="flex justify-center">
      <div className=" border  shadow-xl rounded-lg p-11 mt-36 w-3/4 flex flex-col justify-center align-center bg-white">
        <div className="flex justify-center align-center gap-2">
          <p className="Be-Vietnam-Pro text-[#595959] ">
            ¡SELECCIÓN COMPLETADA CORECTAMENTE!
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="green"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div className="flex justify-center align-center mt-3 gap-3">
          <p className="Be-Vietnam-Pro text-[#595959]">
            Descarga tus fotos aquí
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#595959"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EndPage;
