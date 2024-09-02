import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Abhishek"}
          feedback={"Good , I like your portfolio"}
        />

        <TestimonialCard
          name={"Aegon"}
          feedback={
            "Wow what a portfolio, Keep it up Brother"
          }
        />

        <TestimonialCard
          name="Ashutosh"
          feedback="Amazing , Your Vedio Hub Project is Awesome"
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
