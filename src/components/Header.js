"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import weFramelogo from "@/Images/Group.png";
import { CiSearch } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  return (
    <header className="bg-white pl-4 pr-4 pt-4 lg:pb-0 pb-4 shadow-md sm:pb-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Home Link */}
        <div className=" flex items-center gap-4 justify-between ">
          <Link href="/">
            <Image src={weFramelogo} alt="Logo" width={133} height={65} />
          </Link>

          <div className="hidden lg:flex bg-[#F9FAFB] p-[15px] rounded w-96 flex justify-between items-center ">
            <input
              type="search"
              placeholder="Rechercher un produit"
              className="bg-transparent w-full border-none  focus:outline-none focus:ring-0"
            />{" "}
            <CiSearch className="w-[24px] h-[24px]" />
          </div>
        </div>

        {/* Mobile View Burger Menu */}
        <div className="lg:hidden flex items-center gap-4">
          {" "}
          <FaRegLightbulb className="font-bold text-[25px]" />
          <CiHeart className="font-bold text-[25px]" />
          <CiShoppingCart className="font-bold text-[25px]" />
          {menuOpen ? (
            <FiX
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          <p className="flex p-1 items-center">
            <FaRegLightbulb className="mr-2" />
            Inspirations
          </p>
          <p className="flex p-1 items-center">
            <CiHeart className="mr-2" />
            Mes favoris{" "}
            <span className="ml-1 rounded-3xl pl-1 pr-1 bg-[#E5E7EB]">24</span>
          </p>
          <button className="flex gap-1 bg-[#0093D0] items-center p-2 text-white rounded">
            <CiShoppingCart />
            Panier
          </button>
          <p className="bg-[#EAEDEE] p-5 rounded-full"></p>
          <select>
            {" "}
            <option>FR</option>
            <option>ENG</option>
          </select>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="lg:hidden absolute  left-0 w-full bg-white shadow-md z-20">
          <ul className="flex flex-col space-y-4 text-left py-2">
            <div className="flex p-4 pb-0 gap-2">
              <p className="bg-[#EAEDEE] p-5 rounded-full"></p>
              <select>
                {" "}
                <option>FR</option>
                <option>ENG</option>
              </select>
            </div>
            <button className="font-inter text-[#0093D0] border-[#0093D0] font-bold text-lg p-4 pt-0 border-b-2 border-solid">
              Art de la table
            </button>
            <button className="font-inter  text-xs uppercase  p-2 ">
              Mobilier
            </button>{" "}
            <button className="font-inter   text-xs uppercase  p-2">
              Nappage
            </button>{" "}
            <button className="font-inter   text-xs uppercase p-2">
              Matériel de salle
            </button>{" "}
            <button className="font-inter   text-xs uppercase p-2">
              Cuisine
            </button>{" "}
            <button className="font-inter   text-xs uppercase p-2">
              Barbecue
            </button>{" "}
            <button className="font-inter  text-xs uppercase p-2">Tente</button>{" "}
            <button className="font-inter   text-xs uppercase p-2">
              Chauffage
            </button>{" "}
            <button className="font-inter   text-xs uppercase  p-2">
              Podium - Piste de danse
            </button>{" "}
            <button className="font-inter   text-xs uppercase p-2">
              Son et lumière
            </button>{" "}
            <button className="font-inter   text-xs uppercase  p-2">
              Packs
            </button>{" "}
            <button className="font-inter   text-xs uppercase p-2">
              Consommables
            </button>
          </ul>
        </nav>
      )}
      <div className="hidden lg:flex justify-between">
        <button className="font-inter text-[#0093D0] border-[#0093D0] font-bold text-sm uppercase p-4 border-b-2 border-solid">
          Art de la table
        </button>
        <button className="font-inter text-xs uppercase p-2 font-medium">
          Mobilier
        </button>{" "}
        <button className="font-inter  text-xs uppercase p-2 font-medium">
          Nappage
        </button>{" "}
        <button className="font-inter  text-xs uppercase p-2 font-medium">
          Matériel de salle
        </button>{" "}
        <button className="font-inter  text-xs uppercase p-2 font-medium">
          Cuisine
        </button>{" "}
        <button className="font-inter  text-xs uppercase p-2">Barbecue</button>{" "}
        <button className="font-inter  text-xs uppercase p-2 font-medium">
          Tente
        </button>{" "}
        <button className="font-inter  text-xs uppercase p-2 font-medium">
          Chauffage
        </button>{" "}
        <button className="font-inter  text-xs uppercase p-2 font-medium">
          Podium - Piste de danse
        </button>{" "}
        <button className="font-inter text-xs uppercase font-medium p-2">
          Son et lumière
        </button>{" "}
        <button className="font-inter  text-xs uppercase font-medium p-2">
          Packs
        </button>{" "}
        <button className="font-inter text-xs uppercase font-medium p-2">
          Consommables
        </button>
      </div>
    </header>
  );
}
