"use client"
import React, {useState} from 'react';
import Image from "next/image";
import Container from "@/components/shared/container";
import NavMenu from "@/widgets/nav-menu";
import MobileMenu from "@/widgets/mobile-menu";
import HeaderServices from "@/widgets/header-services";
import logo from "../../public/statics/logo.svg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full z-50 h-20 py-4 md:py-8 lg:py-2 bg-blue-950 shadow-md">
            <Container className="w-full flex items-center gap-x-16 h-full">
                <Image src={logo} alt="Логотип сайта" className="" />
                <NavMenu className="flex-1 hidden md:block" />
                <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
                <HeaderServices onOpenMenu={() => setMenuOpen(true)} className="ml-auto md:ml-[unset]" />
            </Container>
        </header>
    );
};

export default Header;
