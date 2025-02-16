import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">FoodieWeb</h1>
          <p className=" text-sm">
          Delicie-se com uma sinfonia de sabores, onde cada prato é uma tela para
          excelência culinária.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Pratos
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
             Sobre
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Cardápio
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Avaliações
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
             Nossos Pratos
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Cardápio Premium 
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contate Nos</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              tiago_carvalho07@yahoo.com.br
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +55 18 981142927
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> champion programmers</span> |
            <span className=" text-brightColor"> Tiago Carvalho </span> 
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;