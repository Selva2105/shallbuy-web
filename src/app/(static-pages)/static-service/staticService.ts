import axios from "axios";
import { ApplyForm } from "../careers/apply/[slug]/page";

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

export const getJobs = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/v1/careers`,
  );

  return response.data;
};

export const getJobsByID = async (id: string) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/v1/careers/${id}`,
  );

  return response.data;
};

export const applyJob = async (data: ApplyForm) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (key === "pdf" && value instanceof File) {
      formData.append(key, value, value.name);
    } else if (key === "skillSet" && Array.isArray(value)) {
      value.forEach((skill, index) =>
        formData.append(`${key}[${index}]`, skill),
      );
    } else {
      formData.append(key, value.toString());
    }
  });

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/v1/applications`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
};
