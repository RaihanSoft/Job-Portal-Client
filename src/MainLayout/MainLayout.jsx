import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Common/Navbar/Navbar'
import Footer from '../Common/Footer/Footer'

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto' >

            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
