import React from "react";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import detailItemImage from "@/Images/fullimage.png";
import darkTable from "@/Images/darktableimg.png";
import lighttable from "@/Images/lighttableimg.png";
import icon1 from "@/Images/Group01.png";
import icon2 from "@/Images/Frame.png";
import { FaPlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
const ItemDetails = () => {
  return (
    <div className="p-3 lg:p-4 flex flex-col gap-4">
      <div className=" lg:hidden  bg-[#F9FAFB] p-[15px] rounded w-full flex justify-between items-center ">
        <input
          type="search"
          placeholder="Rechercher un produit"
          className="bg-transparent w-full border-none  focus:outline-none focus:ring-0"
        />{" "}
        <CiSearch className="w-[24px] h-[24px]" />
      </div>
      <div className="pt-4 pb-4 lg:pt-0">
        <h6 className="flex gap-2 font-geist ">
          Home{" "}
          <span className="flex items-center gap-2 text-[#9C9C9C]">
            {" "}
            <GoDotFill />
            Art de la table
          </span>
        </h6>
      </div>
      <div className="lex-col lg:flex  gap-4">
        <div className="bg-[#F8F6F4] rounded flex p-4 w-full">
          <div className="flex-col justify-start items-start gap-4">
            <button className="w-[55px] mb-2 h-[55px] bg-white rounded flex items-center justify-center">
              <Image src={darkTable} alt="anotherImages" />
            </button>
            <button className="w-[55px] mb-2 h-[55px] bg-white rounded flex items-center justify-center opacity-40">
              <Image src={lighttable} alt="anotherImages" />
            </button>
            <button className="w-[55px] mb-2 h-[55px] bg-white rounded flex items-center justify-center opacity-40">
              <Image src={lighttable} alt="anotherImages" />
            </button>
            <button className="w-[55px] mb-2 h-[55px] bg-white rounded flex items-center justify-center opacity-40">
              <Image src={lighttable} alt="anotherImages" />
            </button>
          </div>
          <div>
            <Image src={detailItemImage} alt="fullImage" priority />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-between ">
          <div>
            <h4 className="font-playfair text-2xl font-normal pt-4 leading-9 text-left flex justify-between w-full items-center">
              Cheese – appareil à raclette 1/2 roue <CiHeart />
            </h4>
            <p className="p-2 font-geist text-xl font-normal leading-7 text-left custom-text-style">
              39,50€
              <span className="text-[#9C9C9C] font-geist text-sm font-normal leading-5 text-left custom-text-style">
                {" "}
                /pièce
              </span>
            </p>
            <div className="flex justify-between border-2 pt-4 pb-4 border-l-0 border-r-0">
              <div className="flex gap-2 border-[#9C9C9C] ">
                <Image src={icon1} alt="icon1" />
                <p className="text-[#111928] font-geist text-sm flex justify-start">
                  20<span className="text-xs">cm</span>
                </p>
                <Image src={icon2} alt="icon1" />
                <p className="text-[#111928] font-geist text-sm flex justify-start">
                  50<span className="text-xs">cm</span>
                </p>
              </div>
              <div>
                <p className="font-geist text-[#9C9C9C]">RÉF : VABGN5</p>
              </div>
            </div>
            <p className="pt-2 font-geist text-[#5D5D5D] text-sm font-normal leading-[18.2px] text-left custom-text-style">
              Location appareil à raclette - Raclette traditionnelle 1/2 roue{" "}
              <br />
              Réglable en hauteur <br />
              Appareil à raclette professionnel
              <br /> Boîtier de chauffe horizontal réglable en hauteur <br />
              <br />
              220V 900W
            </p>
          </div>
          <div className="border-2 border-l-0 border-r-0 border-b-0 border-[#9C9C9C] pt-4 flex justify-around gap-2">
            <div className="border-2 rounded p-2 w-[153px] flex justify-around h-[49px]">
              <button>−</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className="bg-[#5CD2DD] w-full text-white rounded">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <div className="w-full flex flex-col gap-4">
          <h3 className="font-cabinet text-[20px] font-normal leading-[25px] text-left ">
            Description produit
          </h3>
          <p className="font-geist text-[14px] font-normal text-[#9C9C9C]">
            Festi vous propose à la location un/une &quot;Jewel – grand
            couteau/10pc&quot; pour votre évenement et ce dès 0,35 € / pièce
            (HTVA). Que ce soit pour votre mariage, une fête d&apos;anniversaire
            ou du personnel, ce produit a fait l&apos;objet d&apos;une sélection
            rigoureuse par notre équipe. Il est en location chez nous sous la
            référence &quot;VAJGC&quot;. Nous sommes à votre disposition pour
            que les événements de nos clients, même en last-minute, soient
            toujours une réussite. Vous pourrez trouver tout une série
            d&apos;autre produit à louer de ce type dans la catégorie &quot;Art
            de la Table&quot;.
          </p>
        </div>
        <div className="w-full bg-[#F8F6F4] p-4 flex flex-col justify-around gap-2">
          <h4 className="flex flex-row justify-between">
            Livraisons <FaPlus />
          </h4>
          <h4 className="flex flex-row justify-between">
            Questions <FaPlus />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
