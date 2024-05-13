import { React, useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-200 mt-8 pt-5 pb-5 px-4 w-full">
      <h2 className="text-center text-4xl font-semibold text-gray-800 mb-6">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 md:pl-32 lg:pl-44"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none md:w-11/12 lg:w-10/12"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border border-gray-300  rounded-md py-2 px-4 focus:outline-none md:w-11/12 lg:w-10/12"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="border border-gray-300  rounded-md py-2 px-4 focus:outline-none md:w-11/12 lg:w-10/12"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-100 md:w-11/12 lg:w-10/12"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
