//  This compoment is for the selected Navbar
//  We are going ti use a zustand store to manage which navbar will appear at the top of the selected home
import React from 'react'
import Navbar1 from './Navbar1'
import { useSetNavbar } from '../../../hooks/useSetNavbar'
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';
import SmallUpNavbar from './SmallUpNavbar';

const Navbar: React.FC = () => {
    const { selectedNav } = useSetNavbar();

    return (
        <header className='container sticky z-50 top-0 left-0 w-screen backdrop-blur-md bg-background/85 border-b border-foreground/20'>
            {/* NavBar for small screens */}
            <nav className="md:hidden">
                <SmallUpNavbar />
            </nav>

            {/* NavBar for large screens */}
            <nav className="hidden md:block py-3 px-4">
                {
                    selectedNav === "nav1" ? (<Navbar1 />) : (selectedNav === "nav2" ? (<Navbar2 />) : (<Navbar3 />))
                }
            </nav>
        </header>
    )
}

export default Navbar