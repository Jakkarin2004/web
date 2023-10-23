import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <header>
        <nav className="nav_header">
          <div className="logo">MUSIC</div>
          <ul>
            <li>
              <Link to='Home'>หน้าหลัก</Link>
            </li>
            <li>
              <a href="#">หมวดหมู่</a>
            </li>
            <li>
              <a href="#"> ค้นหาเพลง</a>
            </li>
            <li>
              <Link to ='back'>เพิ่มเพลง</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
