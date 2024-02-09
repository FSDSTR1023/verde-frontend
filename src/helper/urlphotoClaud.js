export async function urlPhotoC(photos) {
  const urlphotoCloud = [];
  const myData = new FormData();

  for (let i = 0; i < photos.length; i++) {
    let file = photos[i];
    myData.append("file", file);
    myData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/" +
        import.meta.env.VITE_CLOUDINARY_NAME +
        "/image/upload",
      {
        method: "POST",
        body: myData,
      }
    );

    const r = await response.json();
    urlphotoCloud.push(r.secure_url);
    console.log("📢 r", r);
  }
  return urlphotoCloud;
}
