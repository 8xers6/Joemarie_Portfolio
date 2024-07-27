import React from 'react';

function ContactUsSection() {
    return (
      <div className="container mx-auto mt-8 " id="Contactme" >
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg px-8 py-7">
          <h2 className="text-2xl font-bold mb-4">Contact Me!</h2>
          <p className="text-gray-700 mb-4">Feel free to reach out to me through the following Contacts:</p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Email:</h3>
            <p className="text-gray-700">jacintojoemarie.pdm@gmail.com</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Phone:</h3>
            <p className="text-gray-700">+639219318175</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 " >Address:</h3>
            <p className="text-gray-700">#1482 Lambakin, Marilao Bulacan</p>
          </div>
          <p className="text-gray-700">I look forward to hearing from you!</p>
        </div>
      </div>
    );
  };

export default ContactUsSection;

