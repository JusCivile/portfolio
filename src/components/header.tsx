"use client";
import React from "react";
import { StaggeredMenu } from "./StaggeredMenu";

const menuItems = [
  {
    label: "Home",
    link: "/",
    ariaLabel: "Home",
  },
  {
    label: "About",
    link: "/about",
    ariaLabel: "About",
  },
  {
    label: "Contact",
    link: "/contact",
    ariaLabel: "Contact",
  },
];

const socialItems = [
  {
    label: "GitHub",
    link: "https://github.com/juscivile",
  },
];

export default function Header() {
  return (
    <div style={{ height: '100vh', background: '#1a1a1a' }}>
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#fff"
      logoUrl="/assets/JusCivileLogo.jpeg"
      openMenuButtonColor="#000"
      changeMenuColorOnOpen={true}
      colors={["#B19EEF", "#5227FF"]}
      accentColor="#ff6b6b"
      onMenuOpen={() => console.log("Menu opened")}
      onMenuClose={() => console.log("Menu closed")}
      isFixed={true}
    /> 
    </div>
  );
  
};
