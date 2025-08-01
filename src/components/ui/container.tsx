import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="px-5 max-w-[1124px] mx-auto">{children}</div>;
};

export default Container;
