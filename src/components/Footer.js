import Image from "next/image";
import React from "react";
import Logo from "@/Images/Group.png";
import instagramIcon from "@/Images/instagram.png";
import linkedinIcon from "@/Images/linkedin.png";
import twitterIcon from "@/Images/twitter.png";
const Footer = () => {
  return (
    <div className="border-t-2 border-[#39393930] pt-6 mb-40 flex justify-between ">
      <div className="flex gap-2  flex-wrap lg:flex-nowrap">
        <div className="flex p-3 lg:p-4 justify-between align-center w-full lg:w-auto">
          <Image
            src={Logo}
            alt="foooterlogo"
            className="w-[133px] h-[65px] mt-3"
          />
          <div className="flex text-end flex-col min-w-[146px] gap-2  lg:hidden p-3">
            <h4 className="text-[#393939] font-bold font-Cabinet  text-base">
              NOUS SUIVRE
            </h4>
            <div className="flex gap-2">
              <Image src={twitterIcon} alt="twitterIcon" />
              <Image src={instagramIcon} alt="instagramicon" />
              <Image src={linkedinIcon} alt="linkedinIcon" />
            </div>
          </div>
        </div>
        <div className="flex gap-1 w-full lg:gap-3 justify-between  p-3">
          <div className="flex flex-col gap-2 w-full ">
            <h4 className="text-[#393939] font-bold font-Cabinet  text-sm lg:text-base">
              INFOS PRATIQUES
            </h4>
            <p className="text-sm font-Geist text-[#393939] font-normal">
              À propos
            </p>
            <p className="text-sm font-Geist text-[#393939] font-normal">
              Livraisons & Reprises
            </p>
            <p className="text-sm font-Geist text-[#393939] font-normal">
              Mode d’emploi
            </p>
            <p className="text-sm font-Geist text-[#393939] font-normal">
              F.A.Q
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full ">
            <h4 className="text-[#393939] font-bold font-Cabinet  text-sm lg:text-base">
              LÉGAL
            </h4>
            <p className="text-sm font-Geist text-[#393939] font-normal">
              Mentions légales
            </p>
            <p className="text-sm font-Geist text-[#393939] font-normal">CGU</p>
            <p className="text-sm font-Geist text-[#393939] font-normal">CGV</p>
            <p className="text-sm font-Geist text-[#393939] font-normal">
              Politique de confidentialité
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full ">
            <h4 className="text-[#393939] font-bold font-Cabinet text-sm lg:text-base">
              MON COMPTE
            </h4>
            <p className="text-sm font-Geist text-[#393939] font-normal">
              Accéder à mon compte
            </p>
            <p className="text-sm font-Geist text-[#393939] font-normal">
              Ma liste d’envie
            </p>
            <p className="text-sm font-Geist text-[#393939] font-normal">
              Créer un compte
            </p>
            <p className="text-sm font-Geist text-[#393939] font-normal">
              Mot de passe oublié
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-end flex-col min-w-[146px] gap-2 hidden lg:block p-3">
        <h4 className="text-[#393939] font-bold font-Cabinet  text-base">
          NOUS SUIVRE
        </h4>
        <div className="flex gap-2 ">
          <Image src={twitterIcon} alt="twitterIcon" />
          <Image src={instagramIcon} alt="instagramicon" />
          <Image src={linkedinIcon} alt="linkedinIcon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
