import React from "react";
import Button from "../layouts/Button";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-row justify-start md:px-32 px-5 bg-[url('./assets/img/hero1.jpg')] bg-cover bg-no-repeat"
      style={{ backgroundSize: "cover" }}
    >
      <div className="flex flex-col justify-center md:w-1/3 text-left">
        <h1 className="text-7xl font-semibold">
          Unlock Your{" "}
          <TypeAnimation
            sequence={["Strength", 1000, "Power", 1000, "Capability", 1000]}
            wrapper="span"
            speed={50}
            className="text-5xl text-white font-bold block mt-5"
            repeat={Infinity}
          />
        </h1>

        <div className="mt-9 flex justify-start">
          <Button title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Home;
