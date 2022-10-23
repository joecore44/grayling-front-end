const baseUrl = "https://grayling-front-end.vercel.app"
  process.env.NODE_ENV === "production"
    ? "https://grayling-front-end.vercel.app"
    : "http://localhost:3000";

export default baseUrl;