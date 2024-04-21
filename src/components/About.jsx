import React from "react";
import img from "../assets/img/about2.jpg";

const About = () => {
 return (
    <div className="min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
          About Us
        </h1>

        <div className="flex flex-col md:w-3/4 space-y-5 mt-4 text-2xl">
          <p>
            Your health is your most valuable asset. At Suplex Gym, we're committed to being your partner in achieving peak health and elevating your fitness journey. Our gym is not just a place to work out; it's a community where you're supported in every stride, lift, and leap forward.
            <p>
              At our fitness center, our team of certified personal trainers,
              attentive staff, and experienced management are dedicated to
              fostering a nurturing environment.
            </p>
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <img src={img} alt="img" width={1500} />
      </div>
    </div>
 );
};

export default About;
