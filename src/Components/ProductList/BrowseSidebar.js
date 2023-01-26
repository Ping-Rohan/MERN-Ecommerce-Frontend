import React from "react";
import { AiOutlineMenuFold, AiOutlineArrowRight } from "react-icons/ai";
import "./BrowseSidebar.css";

export default function BrowseSidebar() {
  return (
    <aside>
      <div className="sidebar">
        <div className="sidebar-heading">
          <AiOutlineMenuFold />
          <span>Browse Categories</span>
        </div>
        <ul className="items">
          <li>
            <span>Cell Phones</span> <AiOutlineArrowRight />
          </li>
          <li>
            <span>Computer & Accessories</span> <AiOutlineArrowRight />
          </li>
          <li>
            <span>Television & Video</span> <AiOutlineArrowRight />
          </li>

          <li>
            <span>Smart Watches</span> <AiOutlineArrowRight />
          </li>
          <li>
            <span>Sports & Outdoors</span> <AiOutlineArrowRight />
          </li>
          <li>
            <span>Home Utensils</span> <AiOutlineArrowRight />
          </li>
        </ul>
      </div>
    </aside>
  );
}
