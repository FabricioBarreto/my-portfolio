"use client";
import React, { useState } from "react";
import GitHubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:py-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <div>
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for a new opportunity, my imbox is alway
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/FabricioBarreto">
              <Image src={GitHubIcon} alt="GitHub Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/fabricio-barreto-9082b0187/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium mb-2"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-[#19181E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                required
                placeholder="example@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                className="bg-[#19181E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                required
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#19181E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>

            {emailSubmitted && (
              <p className="text-green-500 mt-2">Email sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
export default EmailSection;
