import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import logo from "./caf-logo.JPG";
import "../UI/Cafteria.css";
import { FaHome } from "react-icons/fa";

import { Link } from "react-router-dom";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Cafteria = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">

        <div className="title">
          <img src={logo} alt="logo" className="logo" title="Back to home" />
          <h2>Menu List</h2>
          <div className="underline"></div>
          <Link to="/home">
            <center className="home-icon">
              <FaHome />
            </center>
          </Link>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default Cafteria;
