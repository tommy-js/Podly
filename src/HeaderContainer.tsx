import React from "react";
import Image1 from "./Image1";
import Image2 from "./Image2";
import Image3 from "./Image3";

const HeaderContainer: React.FC = () => {
  return (
    <div className="main_header_images_block">
      <Image1 />
      <Image2 />
      <Image3 />
    </div>
  );
};

export default HeaderContainer;
