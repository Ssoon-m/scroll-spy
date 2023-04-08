import React from "react";

interface Props {
  title?: React.ReactNode;
  className?: string;
}

const MobileHeader = ({ title = "상품상세정보", className }: Props) => {
  return (
    <header className="h-14 pl-8 pr-8 flex justify-center items-center bg-white">
      <div className="font-bold text-xl">{title}</div>
    </header>
  );
};

export default MobileHeader;
