import React, { ReactNode } from "react";

interface bannerProps {
  title: ReactNode;
}

const Banner = ({ title }: bannerProps) => {
  return (
    <div className="text-sm text-center text-wrap w-full bg-gray-900 text-white p-1.5 font-medium">
      {title}
    </div>
  );
};

export default Banner;
