import JSZip from 'jszip';

const EndPage = ({ photos }) => {

  const handleDownload = async () => {
    const zip = new JSZip();

    const promises = photos.map(async (url) => {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      zip.file(url.split('/').at(-1), arrayBuffer);
    });

    await Promise.all(promises);

    zip.generateAsync({ type: 'blob' })
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'photos.zip';
        link.click();
      });
  };

  return (
    <div className="flex justify-center pb-36 pt-24">
      <div className=" border shadow-xl rounded-lg p-11 w-3/4 flex flex-col justify-center align-center bg-white">
        <div className="flex justify-center align-center gap-2">
          <p className="Be-Vietnam-Pro text-[#595959] ">
            ¡SELECCIÓN COMPLETADA CORECTAMENTE!
          </p>

          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="green"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div className="flex justify-center align-center mt-3 gap-3">
          <p className="Be-Vietnam-Pro text-[#595959]">
            Descarga tus fotos aquí
          </p>
          <svg
            onClick={handleDownload}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#595959"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </div>

        <div className='flex flex-wrap gap-2 mt-10'>
          {
            photos.map(ph => <img key={ph} width={100} height={150} src={ph} alt={ph} />)
          }
        </div>

      </div>
    </div>
  );
};

export default EndPage;
