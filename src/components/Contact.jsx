import { useState, useEffect } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch(
        "https://getform.io/f/f5fc6514-76cf-48de-b6dc-fcf613335978",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      event.target.reset();
      setSubmitted(true);
    } catch (err) {
      console.log(err);
    }

    event.target.reset();
  };

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" py-4 text-3xl text-center font-bold   text-pink-700 mb-6">
        Contact Us
      </h1>
      <p className="text-center pb-3 mb-6">
        Use the form below to contact us directly.
      </p>
      <form className="w-full max-w-xl mx-auto" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4 w-full ">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2" htmlFor="name">
              Name
            </label>
            <input
              className="bg-gray-100 flex border-2 border-gray-300 rounded p-3 text-gray-700 focus:outline-none focus:bg-white focus:border-pink-600"
              name="name"
              type="text"
              id="name"
              autoComplete="false"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="bg-gray-100  p-3 flex border-2 border-gray-300 rounded  text-gray-700 focus:outline-none focus:bg-white focus:border-pink-600"
              name="phone"
              type="text"
              id="phone"
              autoComplete="false"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-gray-100 border-2  p-3 flex  border-gray-300 rounded focus:outline-none  focus:bg-white focus:border-pink-600"
            name="email"
            type="email"
            id="email"
            autoComplete="false"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="bg-gray-100 border-2 rounded p-3 flex  border-gray-300 focus:outline-none  focus:bg-white focus:border-pink-600"
            type="text"
            name="subject"
            id="subject"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-gray-100 border-2 rounded-md p-3  border-gray-300 focus:outline-none  focus:bg-white focus:border-pink-600"
            name="message"
            rows="10"
            id="message"
            required
          ></textarea>
        </div>
        <div className="flex flex-col">
          <button
            className="shadow mt-4 bg-gradient-to-r from-gray-500 to-[#aa2055]  hover:scale-[1.025] ease-in duration-200 hover:text-yellow-400 focus:shadow-outline focus:outline-none text-yellow-100 font-bold py-2 px-4 rounded-lg "
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-zinc-800 text-orange-200 rounded-lg p-6 shadow-lg">
            <p className="text-xl">Form submitted successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
