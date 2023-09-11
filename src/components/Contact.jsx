/* eslint-disable no-unused-vars */
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" py-4 text-3xl text-center font-bold  text-violet-500 mb-6">
        Contact Us
      </h1>
      <form
        action="https://getform.io/f/f5fc6514-76cf-48de-b6dc-fcf613335978"
        method="POST"
        encType="multipart/form-data"
        className="w-full max-w-xl  mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full ">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="bg-gray-100 flex border-2 border-gray-300 rounded p-3 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
              name="name"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="bg-gray-100  p-3 flex border-2 border-gray-300 rounded  text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
              name="phone"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="bg-gray-100 border-2 rounded p-3 flex  border-gray-300"
            name="email"
            type="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="bg-gray-100 border-2 rounded p-3 flex  border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="bg-gray-100 border-2 rounded-md p-3  border-gray-300"
            name="message"
            rows="10"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <button
            className="shadow mt-4 bg-purple-500 hover:bg-purple-700 ease-in duration-200 hover:text-yellow-400 focus:shadow-outline focus:outline-none text-yellow-100 font-bold py-2 px-4 rounded-lg "
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
