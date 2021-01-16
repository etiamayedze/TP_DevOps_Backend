export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://tobedefined.io/api"
    : "https://warm-fortress-97103.herokuapp.com/";
export default API_URL;
