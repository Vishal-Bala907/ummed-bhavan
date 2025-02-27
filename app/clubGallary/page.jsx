import ClubGallary from "@/components/ClubGallary/ClubGallary";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import React from "react";

const page = () => {
  return (
    <div>
      <Header1 />
      <ClubGallary />
      <FooterOne />
    </div>
  );
};

export default page;
