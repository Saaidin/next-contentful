import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  
  return (
    <div>
      <Header/>
      {children}
      <Footer />
    </div>
  )
}
/*
import Link from "next/link"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2023 Just Add Marmite :)</p>
      </footer>
    </div>
  )
}
*/