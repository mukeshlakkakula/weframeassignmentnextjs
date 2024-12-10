"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import bigTable from "@/Images/Bigtable.png";

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <div className="relative p-5 w-[98%] lg:w-full bg-[rgba(251,249,248,0.6)] ">
      <div className="flex lg:p-4 justify-between items-center">
        <h4 className="font-cabinet text-[20px] font-normal leading-[25px] text-left grow">
          Ces produits pourraient vous intéresser
        </h4>
        <span className="font-cabinet flex:inline text-[12px] font-normal text-[#9C9C9C] underline decoration-underline uppercase ">
          Voir toute la collection
        </span>
      </div>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="lg:p-4 p-1 w-full">
            <div className="p-4 bg-[#F9F7F5]">
              <div className="flex justify-between items-center">
                <CiHeart className="text-xl" />
                <p className="bg-white p-2 rounded text-xs">Art de la table</p>
              </div>
              <div className="flex justify-center">
                <Image src={bigTable} alt="cardimg" />
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <p className="p-2 font-geist text-xl font-normal leading-7 text-left">
                  39,50€
                </p>
                <p className="text-[#111928] font-geist text-xl flex justify-start">
                  0<span className="text-xs">€</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex lg:gap-2 border-[#9C9C9C]">
                  <p className="pt-2 font-geist text-[#5D5D5D] text-[8px] lg:text-xs  font-normal">
                    0,35€/Pièce ·<br className="lg:hidden" /> RÉF : VABGN5
                  </p>
                </div>
                <div>
                  <p className="rounded-[20px] lg:text-xs text-[10px] bg-[#F1F4F6] px-3 py-1">
                    20 pièces
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
