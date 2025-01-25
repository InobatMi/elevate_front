import React from "react";
import K from "../assets/simple logo for the word elevate with a rocket in blue.png";

import "../index.css";

import { Link } from "react-router-dom";

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
    {
      name: "Public",
    },
    {
      name: "Books",
    },
  ];

  return (
    <nav className="flex  bg-white sticky justify-center items-center h-[150px] gap-3 p-2 shadow-md w-screen flex-col">
      <div className="flex gap-3 items-center w-full p-1 justify-between">
        <div className="flex justify-center items-center gap-3">
          <img src={K} alt="" className="w-16 h-16 Logo" />
          <a href="/">
            {" "}
            <h1 className="text-4xl font-bold">EL:VATE</h1>
          </a>
        </div>
        <div className="w-[500px]">
          <input
            type="search"
            placeholder="Search what you need"
            className="bg-grey-100 w-full h-[40px] rounded-md border-0.5 border-black shadow-md p-2"
          />
        </div>
        {/* <div className="flex gap-2">
          <button className="rounded-full bg-gray-200 p-2">
            <Bell />
          </button>
          <div>
            <div className="flex gap-2 items-center justify-center">
              <img src={H} alt="" className="rounded-full h-10 w-10" />
              <p>Hi, Naruto</p>
            </div>
          </div>
        </div> */}
        <div className="flex gap-3 ">
          <Link to="/NewProject">
            <button className="bg-cyan-600 rounded-md h-10 w-30 text-white hover:bg-cyan-300">
              Add a project
            </button>
          </Link>

          <Link to="/Login">
            <button className=" rounded-md bg-white text-black h-10 w-20 hover:text-blue-500">
              Log in
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        {categories.map((category, index) => (
          <button key={index} className=" p-1 rounded-md font-medium">
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
};
