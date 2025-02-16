import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import {BiChevronDown} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"
import {AiOutlineMenuUnfold} from "react-icons/ai"
const Navbar = () => {

const [menu, setmenu] = useState(false);

const handleChange = () => {
    setmenu(!menu)
}

const closeMenu = () => {
    setMenu(false )
}


    return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className="text-xl font-semibold">Faster-Food</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>

            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Dishes
                </Link>

                <BiChevronDown className="cursor-pointer" size={25} />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="pratos"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Apimentada
                  </Link>
                </li>
                <li>
                  <Link
                    to="pratos"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Saborosa
                  </Link>
                </li>
                <li>
                  <Link
                    to="pratos"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Deliciosos
                  </Link>
                </li>
                <li>
                  <Link
                    to="pratos"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Crocante
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="sobre"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Sobre
            </Link>

            <Link
              to="cardapio"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Cardápio
            </Link>

            <Link
              to="avaliações"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Avaliações
            </Link>

            {/* Button */}
            <a
              href="https://api.whatsapp.com/send/?phone=18981142927&text=Gostaria%20de%20fazer%20um%20pedido"
              target="_blank"
            >
              <Button title="Peça o Seu" />
            </a>
          </nav>

          <div>
            {menu ? ( <AiOutlineClose size={25} onClick={handleChange}/>
            ):(
                <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
            )
            }
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="pratos"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Pratos
          </Link>
          <Link
            to="sobre"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Sobre
          </Link>
          <Link
            to="cardapio"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Cardápio
          </Link>
          <Link
            to="avaliaçoes"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Avaliações
          </Link>

          {/* Button */}
          <a
              href="https://api.whatsapp.com/send/?phone=18981142927&text=Gostaria%20de%20fazer%20um%20pedido"
              target="_blank"
            >
              <Button title="Peça o Seu" />
            </a>
            
        </div>

      </div>
    </div>
  );
};

export default Navbar;
