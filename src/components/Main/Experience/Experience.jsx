import React from "react";

const Experience = () => {
  return <>
    <h2 className="expTitle">Experience</h2>
    <section id="experience">
    <article data-aos="fade-right" data-aos-duration="1500">
      <h3>Unity Developer</h3>
      <p className="company">Multiplicalia</p>
      <p>jan. 2022 - jul. 2022</p>
      <ul>
        <li>
          Environment development with Unity engine and C# language.
        </li>
        <li>
          Version control with Collaborate and later with Plastic
        </li>
        <li>
          API development with PHP framework, Symfony
        </li>
        <li>
          SCRUM Methodology
        </li>
      </ul>
    </article>
    {/* <article>
      <h3>Catering</h3>
      <p className="company">Icecobar</p>
      <p>jul. 2019 - nov. 2020</p>
    </article> */}
  </section>
  </>
};

export default Experience;
