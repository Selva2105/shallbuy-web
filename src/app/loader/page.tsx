import Loader from "@/components/component/shared/loader/loader";
import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen transition-opacity duration-1000 ease-in-out ">
      <Loader />
    </div>
  );
};

export default loading;
