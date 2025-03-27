import React, { useState } from "react";

const ContactForm = () => {
  const [showForm, setshowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative w-full bg-zinc-900 text-white flex justify-center items-center my-5 pb-10 flex-col">
      {showForm && (
        <section
          className={`w-10/12 mx-auto flex justify-between items-center gap-4 transition-all duration-500 ease-in-out ${
            showForm
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-20px]"
          }`}
        >
          <div className="w-fit mr-10">
            <h2 className="text-[7vw] uppercase border-b font-bold opacity-60">
              Let's Get
            </h2>
            <h2 className="text-[5vw] uppercase font-bold opacity-60">
              In Touch
            </h2>
          </div>
          <form
            className="w-1/2 flex flex-col gap-4 p-8 backdrop-filter backdrop-blur-md shadow-lg"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-zinc-800/50 px-10 py-4 cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 focus:outline-none"
              type="text"
              placeholder="Your Full name"
            />
            <input
              className="bg-zinc-800/50 px-10 py-4 cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 focus:outline-none"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              name=""
              cols="30"
              rows="10"
              className="bg-zinc-800/50 resize-none px-10 py-4 cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 focus:outline-none "
            ></textarea>
            <button className="bg-zinc-800/50 px-10 py-3 mt-2 font-semibold cursor-pointer hover:bg-zinc-900 border-b-2 border-zinc-700 ">
              Submit
            </button>
          </form>
        </section>
      )}
      <button
        onClick={() => setshowForm(!showForm)}
        className="bg-zinc-800 px-10 py-3 mt-4 rounded-full cursor-pointer hover:bg-zinc-900 border border-zinc-700"
      >
        {showForm ? <i className="ri-close-line"></i> : "Contact Me"}
      </button>
    </div>
  );
};

export default ContactForm;
