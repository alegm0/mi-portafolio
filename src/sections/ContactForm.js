// sections/ContactForm.js

import { useState } from "react";

export default function ContactForm() {
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xgvawzzl", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSuccessMessage("Message sent! I can’t wait to connect with you ♡");
      e.target.reset();
    } else {
      setSuccessMessage("Oops! Something went wrong, please try again.");
    }
  };

  return (
    <div
    id="contacto"
    className="bg-white w-full min-h-screen flex flex-col items-center justify-center p-12"
  >
    <h2 className="text-3xl font-bold text-center mb-4">
      Let's Work Together
    </h2>
    <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
      Whether you're a brand, photographer, or creative, feel free to reach
      out. I'm open to collaborations, bookings, and new projects. Let’s
      create something beautiful.
    </p>

    {/* Formulario */}
    {/* Formulario con confirmación sin redirección */}

    <form
      onSubmit={async (e) => {
        e.preventDefault(); // Evita la recarga de la página
        const formData = new FormData(e.target);

        const response = await fetch("https://formspree.io/f/xgvawzzl", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          setSuccessMessage(
            "Message sent! I can’t wait to connect with you ♡"
          ); // Muestra mensaje
          e.target.reset(); // Vaciar los campos
        } else {
          setSuccessMessage(
            "Oops! Something went wrong, please try again."
          );
        }
      }}
      className="w-full max-w-md"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
      />
      <button className="bg-[#ffd700] text-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition mx-auto block">
        Send Message
      </button>

      {/* Mensaje de confirmación */}
      {successMessage && (
        <p className="mt-4 text-center text-yellow-600">{successMessage}</p>
      )}
    </form>

    {/* Redes sociales */}
    <div className="flex space-x-6 mt-6">
      <a
        href="https://www.instagram.com/im_ale24/?hl=es"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/instagram.svg"
          alt="Instagram"
          className="w-7 h-7 transition-transform transform hover:scale-110"
        />
      </a>
      <a
        href="https://www.tiktok.com/@ale.gm21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/tiktok.svg"
          alt="TikTok"
          className="w-7 h-7 transition-transform transform hover:scale-110"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/alejandra-gonzalez-mu%C3%B1oz-7a9285308/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          className="w-7 h-7 transition-transform transform hover:scale-110"
        />
      </a>
    </div>
  </div>

  );
}
