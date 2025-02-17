import React from "react";
import Button from "./layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Eleve o Seu Lado Gourmet com Cada Mordida.
        </h1>
        <p className=" text-backgroundColor">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
          maxime assumenda repellat corrupti officia dolorum delectus labore
          deleniti?
        </p>
        <div className="lg:pl-44 text-xl font-light">
          {/* Button */}
          <a
            href="https://api.whatsapp.com/send/?phone=18981142927&text=Gostaria%20de%20fazer%20um%20pedido"
            target="_blank"
          >
            <Button title="Peça Agora" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
