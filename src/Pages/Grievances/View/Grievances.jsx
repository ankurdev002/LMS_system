import Layout from "../../../Components/Layout/Layout";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const Grievances = () => {
  const form = useRef();
  const isInView = useInView(form, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zpyq50p",
        "template_kwvn8yg",
        form.current,
        "2QHTmcnRhWYf2iNxT"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Layout>
      <div className="grivances-container">
        <h1>Grievances</h1>
        <div className="main-send">
          <div className="send-mail">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-container-send">
                <label>Name</label>
                <input className="send-mail-input" type="text" name="to_name" />
              </div>
              <div className="input-container-send">
                <label>Subject</label>
                <input className="send-mail-input" type="text" name="subject" />
              </div>
              <div className="input-container-send">
                <label>Email</label>
                <input
                  className="send-mail-input"
                  type="email"
                  name="user_email"
                />
              </div>
              <div className="textarea-container-send">
                <label>Message</label>
                <textarea name="message" />
              </div>

              <button className="btn-send-mail">
                <span>Send Message</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <defs>
                    <linearGradient
                      id="myGradient23"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" style={{ stopColor: "#f5f7fa" }} />
                      <stop offset="100%" style={{ stopColor: "#a3badf" }} />
                    </linearGradient>
                  </defs>
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                </svg>
              </button>
            </form>
          </div>
          <div className="send-mail-logo">
            <motion.div
              className="phoneSvg"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
            >
              <svg viewBox="0 0 24 32.666">
                <motion.path
                  strokeWidth={0.2}
                  fill="url(#myGradient23)"
                  stroke="url(#myGradient)"
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity }}
                  d="M24 8.375l-12 10.281-12-10.281v-0.594h24v0.594zM24 22.875l-7.938-5.719 7.938-6.875v12.594zM0 10.281l7.938 6.875-7.938 5.719v-12.594zM12 20.688l3.281-2.875 8.719 6.281v0.125h-24v-0.125l8.719-6.281z"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Grievances;
