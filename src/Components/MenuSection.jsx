import axios from "axios";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
const MenuSection = () => {
  const [menuItems, setmenuItems] = useState([]);

  useEffect(() => {
    axios.get("menu.json").then((data) => {
      const popular = data.data.filter((item) => item.category === "popular");
      setmenuItems(popular);
    });
  }, []);

  return (
    <>
      <Heading heading={"From Our Menu"} subheading={"Check It Out"} />
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item) => (
            <div key={item._id} className="flex items-center">
              {/* Icon Placeholder */}
              <img
                src={item.image}
                className="w-12 h-12"
                style={{ borderRadius: "50% 50% 55% 45% / 5% 50% 45% 95%" }}
              ></img>

              {/* Menu Item Details */}
              <div className="ml-4 flex-1 border-b border-gray-300 pb-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="text-yellow-500 font-bold">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{item.recipe}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuSection;
