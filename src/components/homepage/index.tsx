import React from "react";
import AppHeader from "@/layout/AppHeader";
import Container from "../ui/container";
import HeroSection from "./HeroSection";

const Homepage: React.FC = () => {
  return (
    <div className="bg-black w-screen h-screen">
      <Container>
        <div className="flex flex-col h-screen">
          <AppHeader />
          <HeroSection />
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
