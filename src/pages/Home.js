import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

function Home() {
  return (
    <div id="home" className="hero">

      {/* BOX WRAPPER */}
      <div className="hero-box">

        {/* TEXT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1>Hello,</h1>
          <h1 style={{ color: "#ffa41c" }}>I'm Nagarjun Maharana</h1>

          <p>
            I’m a Computer Science student at <b>Mahindra University</b> with a strong interest in
            Data Science and Machine Learning. I enjoy working with real-world datasets,
            building models, and extracting meaningful insights.
          </p>

          <p style={{ marginTop: "10px", opacity: 0.8 }}>
            Currently exploring predictive modeling, data visualization, and real-world AI applications.
          </p>

          {/* BUTTON */}
          <a href="/Resume.pdf" download>
            <button className="btn">Download Resume</button>
          </a>

          {/* ICONS */}
          <div style={{ marginTop: "15px", fontSize: "24px" }}>
            <a href="https://github.com/nagarjun622" target="_blank" rel="noreferrer">
              <FaGithub style={{ marginRight: "15px" }} />
            </a>

            <a href="https://www.linkedin.com/in/nagarjun-maharana-362218220/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>

          {/* TOOLKIT */}
          <div className="toolkit">
            <h3>Toolkit</h3>
            <div className="tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>SQL</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>
              <span>Data Visualization</span>
              <span>Matplotlib</span>
              <span>Scikit-learn</span>
            </div>
          </div>

          {/* CONTACT */}
          <div className="contact">
            <h3>Contact</h3>
            <p>
              Email:{" "}
              <a href="mailto:nagarjunmaharana09@gmail.com">
                nagarjunmaharana09@gmail.com
              </a>
            </p>
          </div>

        </motion.div>

        {/* IMAGE */}
        <motion.img
          src={profileImg}
          alt="profile"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        />

      </div>
    </div>
  );
}

export default Home;