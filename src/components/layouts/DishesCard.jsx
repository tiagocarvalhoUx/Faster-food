import React from "react"
import {BsStarFill} from "react-icons/bs"
import {BsStarHalf} from "react-icons/bs"
import Button from "./Button"
const DishesCard =(props)=>{
        return (

        <div className="w-full lg:w-2/5 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg]">
            <img className="rounded-xl" src={props.img} alt="img" />
            <div className="space-y-4">
            <h3 className="font-serif text-center text-lg pt-6">{props.title}</h3>
            <div className="flex flex-row justify-center">
                <BsStarFill className="text-brightColor"/>
                <BsStarFill className="text-brightColor"/>
                <BsStarFill className="text-brightColor"/>
                <BsStarFill className="text-brightColor"/>
                <BsStarHalf className="text-brightColor"/>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
                <h3 className="font-semibold text-lg">{props.price}</h3>
                
                {/* Button */}
          <a
              href="https://api.whatsapp.com/send/?phone=18981142927&text=Gostaria%20de%20fazer%20um%20pedido"
              target="_blank"
            >
              <Button title="Selecionar" />
            </a>
            </div>
        </div>
      </div>
    )
}

export default DishesCard;