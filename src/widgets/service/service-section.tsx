import React from 'react';
import Container from "@/components/shared/container";
import ServiceIcons from "@/widgets/service/service-icons";
import ServiceCard from "@/widgets/service/service-card";

const ServiceSection = () => {
    return (
        <section id="service">
            <Container>
                <div>
                    <div className="pt-10 flex justify-center ">
                        <h2 className="  font-semibold   text-4xl text-white">Наши услуги</h2>
                    </div>
                    <div className=" px-10">
                        <ServiceIcons  />
                    </div>
                    <div>
                        <ServiceCard/>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ServiceSection;