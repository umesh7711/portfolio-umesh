import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
 // AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Founder</p>

        <h2>Umesh Bhingare</h2>
        <p>Motivation is Temporary, but Discipline Last Forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://linkedin.com/umeshbhingare77/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/umeshbhingare7711" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/umesh7711" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
