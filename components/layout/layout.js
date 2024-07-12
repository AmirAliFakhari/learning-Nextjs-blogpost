import React from 'react'
import MainNavigation from './main-navigation'

function Layout(props) {
    return (
        <>
            <MainNavigation />
            <maion>{props.children}</maion>
        </>
    )
}

export default Layout