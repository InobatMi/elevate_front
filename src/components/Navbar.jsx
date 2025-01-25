import React from "react";
import { Mail } from "lucide-react";
import { Bell } from "lucide-react";
import { Layers } from "lucide-react";
import H from "../assets/profile.jpg";

export const Navbar = () => {
  return (
    <nav className="flex border border-2">
      <div>
        <input type="search" name="input" id="Input" />
      </div>
      <div>
        <button>
          <Mail />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <Layers />
        </button>
        <div>
          <div className="flex h-">
            <img src={H} alt="" className="h-" />
            <p>Hi, Naruto</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
