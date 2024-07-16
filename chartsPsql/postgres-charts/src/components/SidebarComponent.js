"use client";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Bar Chart", src: "BarChart" },
    { title: "Line Chart", src: "LineChart" },
    { title: "Pie Chart", src: "PieChart" },
    { title: "Area Chart", src: "AreaChart" },
  ];

  return (
    <div className="flex max-h-screen">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-black h-full p-5 pt-8 relative duration-300`}
      >
        <img
          src="../assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
        <Link to="/" className="cursor-pointer">
          <img
            src="../assets/chartIcon.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            CHARTS
          </h1>
          </Link>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
            >
              <Link to={`/${Menu.src}`}>
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
