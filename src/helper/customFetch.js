export const customFetch = async ({ path, method, data, token }) => {
  const be = import.meta.env.VITE_BACKEND_URL;

  const url = be + path;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  token && headers.append("Authorization", `Bearer ${token}`);

  const body = data && JSON.stringify(data);

  try {
    const response = await fetch(url, { method, headers, body });
    const data = await response.json();

    return data;
  } catch (error) {
    console.trace(error.message);
  }
};
