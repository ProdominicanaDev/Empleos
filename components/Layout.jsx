import Head from 'next/head'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children,pagina}) => {
  return (
    <div>
         <Head>
            <title>PRODOMINICANA EMPLEOS-{pagina}</title>
            <meta name="description" content="Empleos prodominicana"/>
            {/* <link rel="stylesheet" href="style01.css"/> */}
        </Head>

        <Header />

        {children}

        <Footer />
    </div>
  )
}

export default Layout