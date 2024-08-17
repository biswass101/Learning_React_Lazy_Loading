import React, { useState } from "react";
import Modal from "./Modal";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1 className="text-xl">Connect With Us</h1>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-400 rounded-md text-sm w-24 h-12"
      >
        Open Popup
      </button>
      <Modal
        header={<p className="text-red-400 font-bold text-2xl">Header</p>}
        footer={<div  className="flex justify-end">
          <button onClick={() => setIsOpen(false)} className="font-bold bg-slate-300 px-4 py-1 rounded">OK</button>
        </div>}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem
          reprehenderit iste est eum repellat autem ab nam. Dicta, odit.
        </p>
      </Modal>
    </>
  );
};

export default Contact;
