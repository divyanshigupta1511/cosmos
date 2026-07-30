"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
export default function Contact() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  company: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const [success, setSuccess] = useState("");

const [error, setError] = useState("");
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setSuccess("");
  setError("");

  if (
    !formData.name ||
    !formData.email ||
    !formData.message
  ) {
    setError("Please fill all required fields.");
    return;
  }

  setLoading(true);

 try {
  await emailjs.send(
    "service_lm2t0cu",
    "template_wfeaioh",
    {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
    },
    "qhZz4bM5sFlmwrTcu"
  );

  setSuccess("Message sent successfully!");

  setFormData({
    name: "",
    email: "",
    company: "",
    message: "",
  });

} catch (err) {
  console.error(err);
  setError("Something went wrong. Please try again.");
}

setLoading(false);
};

return (
<section
      id="contact"
    
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-violet-50/40
        to-white
        px-4 sm:px-4
py-20
sm:px-6
sm:py-24
lg:py-28
        scroll-mt-32
      "
    >
      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-0
         h-[320px]
w-[320px]
sm:h-[420px]
sm:w-[420px]
lg:h-[520px]
lg:w-[520px]
          -translate-x-1/2
          rounded-full
          bg-violet-300/30
          blur-[120px]
sm:blur-[120px]
sm:blur-[180px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
mb-12
text-center
sm:mb-16
lg:mb-20
"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-600">
            Contact
          </p>

          <h2 className="mt-5 text-3xl
font-bold
leading-tight
text-gray-900
sm:text-5xl
md:text-6xl">
            Let's Build
            <span className="block bg-gradient-to-r from-violet-700 to-purple-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base
leading-7
sm:text-lg
sm:leading-8
 text-gray-600">
            Ready to grow your brand? Let's discuss how Cosmos Brandflow can
            help your business stand out.
          </p>
        </motion.div>

        <div className="grid
gap-8
lg:grid-cols-2
lg:gap-10">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
           whileHover={{
 y:-8
}}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/60
              bg-white/70
              p-6
sm:p-8
lg:p-10
              backdrop-blur-2xl
              shadow-[0_25px_70px_rgba(124,58,237,0.15)]
            "
          >
            {/* Glass Reflection */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-3xl
                bg-gradient-to-br
                from-white/20
                via-transparent
                to-transparent
              "
            />

            <div className="relative z-10">

              <h3 className="text-2xl
sm:text-3xl
 font-bold 
 text-gray-900">
                Contact Information
              </h3>

              <div className="mt-10 space-y-6 sm:space-y-8">

                <div className="flex items-center gap-4
sm:gap-5">
                  <div className="rounded-2xl bg-violet-500/15 p-3">
                    <Phone className="text-violet-700" />
                  </div>

                 <a
  href="tel:+918882475018"
  className="text-gray-700 transition hover:text-violet-600"
>
  +91 8882475018
</a>
                </div>

                <div className="flex items-center gap-5">
                  <div className="rounded-2xl bg-violet-500/15 p-3">
                    <Mail className="text-violet-700" />
                  </div>

                 <a
  href="mailto:cosmosbrandflow.in@gmail.com"
  className="text-gray-700 transition hover:text-violet-600"
>
  cosmosbrandflow.in@gmail.com
</a>
                </div>

                <div className="flex items-center gap-5">
                  <div className="rounded-2xl bg-violet-500/15 p-3">
                    <MapPin className="text-violet-700" />
                  </div>

                  <p className="text-gray-700">
                    New Delhi, India
                  </p>
                </div>
                <div className="flex items-center gap-5">
  <div className="rounded-2xl bg-green-500/15 p-3">
    <MessageCircle className="text-green-600" />
  </div>

  <a
    href="https://wa.me/918882475018?text=Hi%20Cosmos%20Brandflow!%0A%0AI%20visited%20your%20website%20and%20would%20love%20to%20discuss%20my%20project."
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 transition hover:text-green-600"
  >
    Chat on WhatsApp
  </a>
</div>

              </div>

              <div className="mt-12 rounded-2xl bg-violet-500/10 p-6">
                <p className="font-semibold text-gray-900">
                  🚀 Let's create something impactful
                </p>

                <p className="mt-2 text-gray-600">
                  Strategy, creativity and technology combined.
                </p>
              </div>

            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
          onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/60
              bg-white/70
              p-6
sm:p-8
lg:p-10
              backdrop-blur-2xl
              shadow-[0_25px_70px_rgba(124,58,237,0.15)]
            "
          >
            {/* Glass Reflection */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-3xl
                bg-gradient-to-br
                from-white/20
                via-transparent
                to-transparent
              "
            />

            <div className="relative z-10 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
onChange={(e) =>
  setFormData({ ...formData, name: e.target.value })
}
                className="
                 w-full
min-h-[52px]
rounded-xl
                  border
                  border-white/50
                  bg-white/60
                  px-4
py-3.5
sm:p-4
                  text-gray-900
                  placeholder:text-gray-500
                  backdrop-blur-md
                  outline-none
                  transition
                  focus:border-violet-500
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
                className="
                  w-full
min-h-[52px]
rounded-xl
                  border
                  border-white/50
                  bg-white/60
                  p-4
                  text-gray-900
                  placeholder:text-gray-500
                  backdrop-blur-md
                  outline-none
                  transition
                  focus:border-violet-500
                "
              />

              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
  onChange={(e) =>
    setFormData({ ...formData, company: e.target.value })
  }
                className="
                  w-full
min-h-[52px]
rounded-xl
                  border
                  border-white/50
                  bg-white/60
                  p-4
                  text-gray-900
                  placeholder:text-gray-500
                  backdrop-blur-md
                  outline-none
                  transition
                  focus:border-violet-500
                "
              />

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
  onChange={(e) =>
    setFormData({ ...formData, message: e.target.value })
  }
                className="
                  w-full
min-h-[52px]
rounded-xl
                  border
                  border-white/50
                  bg-white/60
                  p-4
                  text-gray-900
                  placeholder:text-gray-500
                  backdrop-blur-md
                  outline-none
                  transition
                  focus:border-violet-500
                "
              />

              <button
  type="submit"
    disabled={loading}
                className="
                  w-full
                  rounded-full
                  bg-gradient-to-r
                  from-violet-600
                  to-purple-500
                 py-3.5
sm:py-4 
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_15px_45px_rgba(124,58,237,0.45)]
                "
              >
               {loading ? "Sending..." : "Send Message"}
              </button>
              {error && (
  <p className="mt-4 text-center text-sm text-red-500">
    {error}
  </p>
)}

{success && (
  <p className="mt-4 text-center text-sm text-green-600">
    {success}
  </p>
)}

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}