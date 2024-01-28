import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-[#e26959]">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[rgb(48, 47, 47)] mx-1.5 text-xl hover:text-gray-100 hover:bg-[#e26959] transition-
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;