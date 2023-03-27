import Header from "@/sections/Header"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Glauko Pacheco</title>
        <meta name="description" content="Create dark mode in next and tailwind" />
      </Head>
      <div className="min-h-screen flex flex-col">
     
        <main className="flex-grow">
          <Header />
          { children }
        </main>
 
      </div>
    </>
  )
}

export default Layout