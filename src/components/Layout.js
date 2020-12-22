import React from 'react'
import FooterTwo from './footer/FooterTwo'
import HeaderThree from './header/HeaderThree'

const Layout = ({children}) => {
    return (
        <>
        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
        {children}
        <FooterTwo/>
        </>
    )
}

export default Layout
