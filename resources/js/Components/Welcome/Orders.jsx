import React, { useState, useEffect } from "react";
import Order from "./Order";
// import Project from "./Project";
// import { projectsNav } from "../data";
// import { projectsData } from "../data";
import "../../../css/app.css"

const Orders = ({categories, menus}) => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(menus);
    } else {
      const newMenus = menus.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newMenus);
    }
    console.log("item; ",item.name)
    console.log("active; ",active)
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <section id="order" className="py-32 bg-gray-900 min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            Our Menu
          </h2>
          <p className="subtitle">
          Grab your coffee and food after let's relax under the trees
          </p>
        </div>
        <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white text-lg">
          <li onClick={(e) => {handleClick(e, 0)}}
          className={`${ active === 0 ? "active" : "" } cursor-pointer capitalize m-4`} >
          All
          </li>
          {categories.map((item, index) => {
            index = index + 1
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${ active === index ? "active" : "" } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return <Order item={item} key={item.id} />;
        })}
      </section>
      </div>
    </section>
  );
};

export default Orders;