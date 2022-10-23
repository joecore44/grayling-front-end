const baseApiUrl = "https://dev.graylingagency.co/sites/grayling-v2"
  process.env.NODE_ENV === "production"
    ? "https://dev.graylingagency.co/sites/grayling-v2"
    : "https://dev.graylingagency.co/sites/grayling-v2";

export default baseApiUrl;