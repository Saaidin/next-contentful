import Link from "next/link"
import React, { useState } from "react"

const MobileSideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        className="text-white font-medium px-4 py-2 hover:bg-red-600"
        onClick={handleToggle}
      >
        Menu
      </button>
      <div
        className={`fixed top-0 left-0 bottom-0 right-0 z-50 overflow-auto bg-black w-[300px] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="relative p-4">
          <button
            className="absolute top-0 right-0 p-4 text-white"
            onClick={handleToggle}
          >
            Close
          </button>
          <h2 className="text-2xl font-medium mb-4 text-white">Menu</h2>
          <ul className="list-none p-0 m-0">
            <li className="mb-4 block text-indigo-500 hover:text-indigo-600">
              <Link href="/">Home</Link>
            </li>
            <li className="mb-4 block text-indigo-500 hover:text-indigo-600">
              <Link href="/about">About </Link>
            </li>
            <li className="mb-4 block text-indigo-500 hover:text-indigo-600">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MobileSideMenu
