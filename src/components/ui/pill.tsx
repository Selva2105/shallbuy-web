import React from "react";

interface Props {
  children: React.ReactNode;
}

const PillWithNumber: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-gray-600 rounded-full flex items-center justify-center text-white text-[0.60rem] font-bold leading-[0.5rem]">
        2
      </div>
    </div>
  );
};

export default PillWithNumber;
