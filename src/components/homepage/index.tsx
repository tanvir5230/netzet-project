import React from "react";
import AppHeader from "@/layout/AppHeader";
import Container from "../ui/container";
import HeroSection from "./HeroSection";
import Banner from "./Banner";

const Homepage: React.FC = () => {
  return (
    <>
      <Banner />
      <div>
        <Container className="h-full">
          <div className="h-full flex flex-col">
            <AppHeader />
            <HeroSection className="flex-1" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Homepage;
