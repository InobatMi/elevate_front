import React from "react";
import K from "../assets/simple logo for the word elevate with a rocket in blue.png";
import { Bell } from "lucide-react";
import "../index.css";
import H from "../assets/profile.jpg";

export const Navbar = () => {
  const categories = [
    {
      name: "Music",
    },
    {
      name: "Robots",
    },
    {
      name: "Technology",
    },
    {
      name: "Art",
    },
    {
      name: "Economics",
    },
    {
      name: "Food",
    },
    {
      name: "Apps",
    },
  ];

  return (
    <nav className="flex  bg-white sticky justify-center items-center h-[110px] gap-3 p-2 shadow-sm w-screen flex-col">
      <div className="flex gap-3 items-center w-full p-1 justify-between">
        <div className="flex justify-center items-center gap-3">
          <img src={K} alt="" className="w-16 h-16 Logo" />
          <h1 className="text-4xl font-bold">EL:VATE</h1>
        </div>
        <div>
          <input
            type="search"
            className="bg-grey-100 w-[300px] h-[40px] rounded-md border-0.5 border-black shadow-md p-2"
          />
        </div>
        <div className="flex gap-2">
          <button className="rounded-full bg-gray-200 p-2">
            <Bell />
          </button>
          <div>
            <div className="flex gap-2 items-center justify-center">
              <img src={H} alt="" className="rounded-full h-10 w-10" />
              <p>Hi, Naruto</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        {categories.map((category, index) => (
          <button key={index} className=" p-1 rounded-md ">
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
};
