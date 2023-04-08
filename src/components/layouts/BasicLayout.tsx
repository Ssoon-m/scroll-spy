import React from "react";
import MobileHeader from "../base/MobileHeader";

interface Props {
  children: React.ReactNode;
}

const BasicLayout = ({ children }: Props) => {
  return (
    <div>
      <MobileHeader />
      <main>{children}</main>
    </div>
  );
};

export default BasicLayout;
