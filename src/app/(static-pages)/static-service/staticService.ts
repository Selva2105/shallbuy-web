import axios from "axios";

export const sendMessage = async ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/v1/contact`,
    { name, email, subject, message },
  );

  return response.data;
};
