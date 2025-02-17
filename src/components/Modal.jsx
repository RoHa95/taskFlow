import React from 'react'

// icons
import { IoMdClose } from "react-icons/io";


function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
      <div className=" fixed w-screen h-screen top-0 right-0 left-0 flex justify-center items-center bg-gray-300/50">
        <div className="bg-white p-5 rounded-lg w-2xs shadow-2xl flex-col items-center">
            <div onClick={onClose} className='pb-1.5 cursor-pointer'><IoMdClose/></div>
            <div>{children}</div>
        </div>
      </div>
    );
}

export default Modal