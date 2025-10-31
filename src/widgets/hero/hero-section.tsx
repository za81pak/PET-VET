import React from 'react';
import Image from "next/image";
import doghouse from "../../../public/statics/doghouse.jpg";
import Container from "@/components/shared/container";
import HeroDes from "@/widgets/hero/hero-des";

const HeroSection = () => {
    return (
        <section id="hero" className="pt- h-screen relative w-full pt-20">
            <Image
                src={doghouse}
                alt="doghouse"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <Container>
                    <HeroDes />
                </Container>
            </div>
        </section>
    );
};

export default HeroSection;