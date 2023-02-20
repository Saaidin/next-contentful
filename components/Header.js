import Link from "next/link"
import Menu from "../components/Menu"

export default function Header() {
  return (
    <>
      <header className="bg-black text-white px-4 py-4 flex justify-between items-center relative z-20">
        <div className="font-bold text-[24px] ">
          <Link href="/">Pizza Stores</Link>
        </div>
        <nav>
          <ul className="flex gap-4 items-center">
            <li className="hover:text-yellow-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hidden sm:block hover:text-yellow-300">
              <Link href="/about">About</Link>
            </li>
            <li className="hidden sm:block hover:text-yellow-300">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="block sm:hidden">
              <Menu />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
