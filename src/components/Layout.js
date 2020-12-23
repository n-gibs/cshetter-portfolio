import React from 'react'
import FooterTwo from './footer/FooterTwo'
import HeaderThree from './header/HeaderThree'

const Layout = ({children, landing}) => {
    return (
        <>
        <HeaderThree
            homeLink="/"
            logo="symbol-dark"
            color="color-black"
            landing={landing} />
        {children}
        <FooterTwo/>
        </>
    )
}

export default Layout
