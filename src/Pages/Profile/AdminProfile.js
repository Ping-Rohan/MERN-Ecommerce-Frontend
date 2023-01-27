import React from "react";
import "./AdminProfile.css";
import {
  AiFillDashboard,
  AiFillMessage,
  AiFillAccountBook,
  AiFillFolderAdd,
} from "react-icons/ai";
import Dashboard from "./Dashboard";
import { Route, Link, Routes } from "react-router-dom";

export default function AdminProfile() {
  return (
    <section className="admin-profile">
      <div className="container">
        <div className="admin-left">
          <Link to="dashboard">
            <li>
              <AiFillDashboard className="admin-menu" />
              <span>Dashboard</span>
            </li>
          </Link>
          <li>
            <AiFillAccountBook className="admin-menu" />
            <span>Orders</span>
          </li>
          <li>
            <AiFillMessage className="admin-menu" />
            <span>Messages</span>
          </li>
          <li>
            <AiFillFolderAdd className="admin-menu" />
            <span>Add Product</span>
          </li>
        </div>
        <div className="admin-right">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}
