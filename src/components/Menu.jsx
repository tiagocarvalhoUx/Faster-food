import React from "react";
import DishesCard from "./layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";
import menu4 from "../assets/img/menu4.jpg";
import menu5 from "../assets/img/menu5.jpg";
import menu7 from "../assets/img/menu7.jpg";
import menu8 from "../assets/img/menu8.jpg";
import menu9 from "../assets/img/menu9.jpg";
import menu10 from "../assets/img/menu10.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Cardápio Premium
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Prato Delicioso" price="$16.99" />
        <DishesCard img={menu2} title="Prato Delicioso" price="$18.99" />
        <DishesCard img={menu3} title="Prato Delicioso" price="$14.99" />
        <DishesCard img={menu4} title="Prato Delicioso" price="$14.99" />
        <DishesCard img={menu5} title="Prato Delicioso" price="$14.99" />
        <DishesCard img={menu7} title="Prato Delicioso" price="$14.99" />
        <DishesCard img={menu8} title="Prato Delicioso" price="$14.99" />
        <DishesCard img={menu9} title="Prato Delicioso" price="$14.99" />
        <DishesCard img={menu10} title="Prato Delicioso" price="$14.99" />
      </div>
    </div>
  );
};

export default Menu;
