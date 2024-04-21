import React from "react";
import Button from "../layouts/Button";

// Contact component for displaying a contact form and location map
const Contact = () => {
 return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      {/* Main container for the form and map */}
      <div className="flex flex-col md:flex-row justify-between w-full">
        {/* Contact Form */}
        <form className="w-full md:w-2/5 space-y-5 pt-20">
          {/* Heading for the form */}
          <h1 className="text-5xl font-semibold text-center">Contact Us</h1>
          {/* Input fields for user details */}
          <div className="flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber">Your Number</label>
            <input
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your Number"
            />
          </div>
          {/* Textarea for user message */}
          <div className="flex flex-col">
            <label htmlFor="userMessage">Your Message</label>
            <textarea
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              name="userMessage"
              id="userMessage"
              rows="4"
              placeholder="Enter your Message"
            ></textarea>
          </div>
          {/* Buttons for sending message and starting a call */}
          <div className="flex flex-row justify-center space-x-4">
            <Button title="Send Message" />
            <Button title="Start a call" href="tel:+92" />
          </div>
        </form>
        {/* Location Map */}
        <div className="flex flex-row items-center w-full md:w-2/4 my-5">
          {/* Embedded Google Maps iframe */}
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.9410435104246!2d76.83019517453621!3d30.72005778624699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f9339b1db6efb%3A0x754f46f2bcf3416c!2sSuplex%20Gym!5e0!3m2!1sen!2sin!4v1711138013897!5m2!1sen!2sin"
            width="500"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
 );
};

export default Contact;
