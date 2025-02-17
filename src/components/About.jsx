import React from "react";
import img from "../assets/img/about.png";
import Button from "./layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-[-10%] ">
        <h1 className=" font-semibold text-4xl text-center md:text-start mt-5">
          Porque nos Escolher?
        </h1>

        <div className=" space-y-4 lg:pt-6 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            architecto quisquam delectus minima perferendis nulla quia nisi
            laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
            molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
            laboriosam temporibus delectus, aut a? Quasi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
            suscipit reiciendis accusamus recusandae eum aspernatur pariatur
            odit veritatis facere. Magnam!
          </p>
        </div>
        <div className="space-y-4  lg:pt-5">
          <Button title="Leia Mais" />
        </div>
      </div>
    </div>
  );
};

export default About;
