import axios from "axios";

const getAllproducts = async (
  sortBy: string,
  sortOrder: string,
  category: string,
) => {
  const params: { sortBy: string; sortOrder: string; category?: string } = {
    sortBy,
    sortOrder,
  };
  if (category) params.category = category;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/products`,
    { params },
  );
  return response.data;
};

export { getAllproducts };
