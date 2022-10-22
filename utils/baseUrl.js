const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://production-grayling.s3-website-us-west-2.amazonaws.com"
    : "http://localhost:3000";

export default baseUrl;