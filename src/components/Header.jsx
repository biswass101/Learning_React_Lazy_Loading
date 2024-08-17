import React, { useState } from "react";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between py-4 px-4 shadow-md md:px-8">
      <img src={viteLogo} alt="vit-logo" />
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              if (isActive) return "underline text-blue-700";
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              if (isActive) return "underline text-blue-700";
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              if (isActive) return "underline text-blue-700";
            }}
          >
            Contact
          </NavLink>
        </li>
        <li onClick={() => console.log("Modal Clicked")}>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Sign In
          </button>
          <Modal
            header={<div className="text-xl font-bold">Sign In</div>}
            footer={
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
                >
                  Sign In
                </button>
              </div>
            }
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            {/* Components children */}
            <input
              placeholder="Username"
              className="grow rounded border border-gray-600 px-2 py-1"
              type="text"
            />
            <input
              placeholder="Password"
              className="grow rounded border border-gray-600 px-2 py-1"
              type="password"
            />
          </Modal>
        </li>
      </ul>
    </header>
  );
};

export default Header;
