export const getApiUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.NEXT_PUBLIC_SERVER_API_URL;
  } else {
    return process.env.NEXT_PUBLIC_LOCAL_API_URL;
  }
};
