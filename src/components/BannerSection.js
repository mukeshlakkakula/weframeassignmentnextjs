import React from "react";
import BannerImg1 from "@/Images/Groupe_25.png";
import BannerImg2 from "@/Images/dish.png";
import BannerImg3 from "@/Images/Groupe_56.png";
import BannerImg4 from "@/Images/Groupe_123.png";
import BuffetImage from "@/Images/BUFFET_037 1.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const BannerSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#fef2f2] via-[#FFFFFF] to-[#FFFFFF] py-16">
      <div className="text-center">
        <h2 className="text-2xl  text-[#393939]">
          On s&apos;occupe de{" "}
          <span className="text-[#5CD2DD] font-bold">tout</span>
        </h2>
        <p className="text-[#9C9C9C] mt-2 text-xs">
          Office lorem you must be muted. It meeting commitment busy pain.
        </p>
      </div>
      <div className=" relative  grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 mb-10 mx-auto max-w-5xl">
        <div className="text-center">
          <Image
            src={BannerImg1} // Replace with your icon
            alt="Livraison"
            width={56}
            height={51}
            className="mx-auto mb-4 "
          />
          <h3 className="font-semibold text-[#393939] text-[20px]">
            Livraison & Reprise
          </h3>
          <p className="text-[#9C9C9C] text-xs">Selon vos besoins</p>
        </div>
        <hr
          className="absolute top-[20%] hidden lg:block left-[18%] bg-[#9C9C9C] h-[2px] w-[128px]"
          style={{ zIndex: 0 }}
        />
        <div className="text-center">
          <Image
            src={BannerImg2} // Replace with your icon
            alt="Livraison"
            width={56}
            height={51}
            className="mx-auto mb-4 "
          />
          <h3 className="font-semibold text-[#393939] text-[20px]">
            Nettoyage
          </h3>
          <p className="text-[#9C9C9C] text-xs">Selon vos besoins</p>
        </div>
        <hr
          className="absolute top-[20%] hidden lg:block left-[43%] bg-[#9C9C9C] h-[2px] w-[128px]"
          style={{ zIndex: 0 }}
        />
        <div className="text-center">
          <Image
            src={BannerImg3} // Replace with your icon
            alt="Livraison"
            width={50}
            height={50}
            className="mx-auto mb-4 "
          />
          <h3 className="font-semibold text-[#393939] text-[20px]">
            Commande Illimitée
          </h3>
          <p className="text-[#9C9C9C] text-xs">Tout est possible</p>
        </div>
        <hr
          className="absolute top-[20%] hidden lg:block right-[18%] bg-[#9C9C9C] h-[2px] w-[128px]"
          style={{ zIndex: 0 }}
        />
        <div className="text-center">
          <Image
            src={BannerImg4} // Replace with your icon
            alt="Livraison"
            width={56}
            height={51}
            className="mx-auto mb-4 "
          />
          <h3 className="font-semibold text-[#393939] text-[20px]">
            Transport & Enlèvement
          </h3>
          <p className="text-[#9C9C9C] text-xs">On s’occupe de tout.</p>
        </div>
      </div>
      <div className="p-4 flex flex-col lg:flex-row gap-4">
        <Image
          src={BuffetImage}
          alt="buffetimg"
          className="rounded-[20px] w-full"
        />

        <div className="bg-[#FFF3F9] w-full p-4 lg:p-8 rounded-[20px] flex flex-col pt-4 pb-4 lg:pt-10 lg:pb-10 gap-2">
          <h4 className="font-medium text-3xl lg:text-4xl">
            S’inscrire & économiser <span className="text-[#5CD2DD]">10%</span>{" "}
          </h4>
          <p className="text-sm text-[#BDA2B0] pb-2">
            Office ipsum you must be muted. Synergize helicopter prioritize
            anyway job due harvest most opportunity didn&apos;t. Yet busy any
            meeting shark light marginalised 4-blocker message. Productize
            corporate nail caught synergy highlights lunch. Company another
            pushback items dear or any.{" "}
          </p>
          <div className="flex justify-between items-center gap-2">
            <input
              type="search"
              className="h-[35px] lg:h-[50px] text-[#A68A98] pl-6 rounded grow border-2-[#F5E1EB] w-full"
              placeholder="john@doe.com"
            />
            <button className="h-[35px] lg:h-[50px] text-xs lg:text-sm w-[100px] lg:min-w-[120px] bg-[#5CD2DD] rounded uppercase flex items-center justify-around p-2 gap-2 text-[#FFFFFF]">
              S’inscrire <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
