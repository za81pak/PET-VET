import React, { useEffect } from 'react';
import Link from "next/link";
import { MENU_DATA } from "@/data/menu.data";
import { cn } from "@/lib/utils";

interface IMobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: IMobileMenuProps) => {
    useEffect(() => {
        // код эффекта
    }, [isOpen]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.replace('#', '');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        onClose(); // Закрываем мобильное меню после клика
    };

    return (
        <div onClick={onClose} className={cn("fixed inset-0 z-40 bg-black/15 backdrop-blur-md transition-opacity duration-200", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
            <aside className={cn("fixed top-0 right-0 bottom-0 p-5 max-w-xs w-full h-screen bg-blue-950 border-l border-blue-800 z-50 transition-transform duration-200", isOpen ? "translate-x-0" : "translate-x-full")}>
                <div className="w-full space-y-4">
                    <menu className="w-full">
                        {MENU_DATA.map((item, index) => (
                            <li key={index} className="w-full">
                                <Link
                                    onClick={(e) => handleClick(e, item.href)}
                                    href={item.href}
                                    className="p-3 inline-block w-full text-lg bg-transparent rounded-md transition-colors text-white/70 hover:text-white hover:bg-blue-900"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </menu>
                </div>
            </aside>
        </div>
    );
};

export default MobileMenu;