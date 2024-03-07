export async function urlPhotoC(photos) {
  const myData = new FormData();
  const promises = [];

  for (let i = 0; i < photos.length; i++) {
    const file = photos[i];

    myData.append("file", file);
    myData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);

    const response = fetch(
      "https://api.cloudinary.com/v1_1/" +
      import.meta.env.VITE_CLOUDINARY_NAME +
      "/image/upload",
      {
        method: "POST",
        body: myData,
      }
    )
      .then((response) => response.json())
      .then((data) => data.secure_url);

    promises.push(response);
  }

  return await Promise.all(promises);
}
