import React, { ReactNode } from "react";

const InnerHeader = ({ desc }: { desc: ReactNode }) => {
  return <h1 className="about-desc">{desc}</h1>;
};

export default InnerHeader;
