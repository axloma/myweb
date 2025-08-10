import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(process.env.NEXT_PUBLIC_Email_JS_SID);
    if (form.name != "" && form.email != "" && form.message != "") {
      // console.log(form.name, form.email, form.message);
      emailjs
        .send(
          // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_Email_JS_SID,
          // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          process.env.NEXT_PUBLIC_Email_JS_tid,
          {
            from_name: form.name,
            to_name: "YASSER EMAIL",
            from_email: form.email,
            to_email: "yasseremad556@gmail.com",
            message: form.message,
          },
          // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          process.env.NEXT_PUBLIC_Email_JS_PKEY
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
          }
        );
    } else {
      alert("ALL FAILED ARE REQUIRED ");
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-center justify-items-center  text-center`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl items-center justify-items-center text-center"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col">
            <span className="text-white-200 font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="text-center  bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="text-center bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="text-center resize-none bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="w-md bg-tertiary hover:bg-sky-700 self-center justify-self-center ring-2 ring-blue-500  py-44 px-8 rounded-xl outline-none w-fit text-blue-600 font-bold  relative top-[-15] shadow-md shadow-primary cursor-pointer"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
