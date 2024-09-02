import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../Assets/logo.png";
import cv from "../Assets/umesh.resume.pdf";

const Home = ({ ratio }) => {
  const projectCount = useRef(null);

  const animationProjectsCount = () => {
    animate(0, 50, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Umesh Bhingare
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:official.umeshbhingare1410@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

         
            <button className="download-button">
              <a href={cv} download="Umesh_Bhingare_CV.pdf">
               <b>Download CV</b> 
              </a>
            </button>
         

          <aside>
            <article>
              <p>
                +
                {(
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    50
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span><b>Umeshbhingare1410@gmail.com</b></span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="UMESH" width={1080} height={1080} />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
