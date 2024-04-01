import axios from "axios";

export const getCityList = async (state: string | undefined) => {
  const config = {
    headers: {
      "X-CSCAPI-KEY": `${process.env.NEXT_PUBLIC_COUNTRY_API_KEY}`,
    },
  };

  try {
    const response = await axios.get(
      `https://api.countrystatecity.in/v1/countries/IN/states/${state}/cities`,
      config,
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch countries", error);
    return [];
  }
};
