import React from 'react';
import { MENU_DATA } from '@/data/menu.data';
import Link from "next/link";
import { cn } from '@/lib/utils';

interface INavMenuProps {
    className?: string;
}

const NavMenu = ({ className }: INavMenuProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.replace('#', '');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className={cn(className, '')}>
            <nav className="w-full">
                <menu className="flex items-center gap-x-4 md:gap-x-10 lg:gap-x-20 w-full">
                    {MENU_DATA.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href)}
                                className="ml-13 text-2xl font-semibold text-white/50 transition-colors duration-200 hover:text-white"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </menu>
            </nav>
        </div>
    );
};

export default NavMenu;