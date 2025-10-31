import React from 'react';
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import { LuAlignJustify } from "react-icons/lu";

interface IHeaderServicesProps {
    className?: string;
    onOpenMenu?: () => void;
}

const HeaderServices = ({ className, onOpenMenu }: IHeaderServicesProps) => {
    return (
        <div className={cn(className, "")}>
            <ul className="flex items-center gap-x-2 ">
                <li className="block md:hidden">
                    <Button onClick={onOpenMenu} variant={"outline"} size={"icon"} className="size-10 text-white bg-transparent">
                        <LuAlignJustify />
                    </Button>
                </li>
            </ul>
        </div>
    );
};

export default HeaderServices;
