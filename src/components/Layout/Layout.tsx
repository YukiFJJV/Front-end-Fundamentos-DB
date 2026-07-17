import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from './Header';
import { Outlet } from "react-router-dom";

export default function Layout(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const toggleSidebar = () => {
        setIsMenuOpen(prev => !prev);
    }

    return(
        <>
            <Header
                isMenuOpen={isMenuOpen}
                onToggle={toggleSidebar}
                isSearchActive={isSearchActive}
            />
            <div inert={isMenuOpen ? true : undefined}>
                <main>
                    <Outlet context={{setIsSearchActive}}/>
                </main>
            </div>
            <Sidebar
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
}