import React from 'react';
import Image from "next/image";
import cut from "../../../public/statics/icons/cut.svg"
import dog from "../../../public/statics/icons/dog.svg"
import docs from "../../../public/statics/icons/docs.svg"
import pill from "../../../public/statics/icons/pill.svg"


const ServiceIcons = () => {
    return (
        <div className=" pt-12 flex justify-between">
            <div className="cursor-pointer">
                <Image src={dog} alt="#"/>
                <p className=" pt-3 text-white text-xl flex flex-col items-center font-semibold">Операции</p>
            </div >
            <div className="cursor-pointer">
                <Image src={cut} alt="#"/>
                <p className="pt-3 text-white text-xl flex flex-col items-center font-semibold">Стрижка</p>
            </div>
            <div className="cursor-pointer">
                <Image src={docs} alt="#"/>
                <p className="pt-3 text-white text-xl flex flex-col items-center font-semibold">Гарантия</p>
            </div>
            <div className="cursor-pointer">
                <Image src={pill} alt="#"/>
                <p className="pt-3 text-white text-xl flex flex-col items-center font-semibold">Лабаратория</p>
            </div>
        </div>
    );
};

export default ServiceIcons;