import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
    return (
        <footer className="bg-[#302F2F] text-white">
            <ItemsContainer />
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10
      text-center pt-2 text-white text-sm pb-8"
            >
                <span>Developed by team AnnaDaataConnect &copy; {new Date().getFullYear()} </span>
                <SocialIcons Icons={Icons} />
            </div>
        </footer>
    );
};

export default Footer;