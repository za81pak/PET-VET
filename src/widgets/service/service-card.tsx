import React from 'react';

const ServiceCard = () => {
    const services = [
        'Гинекология',
        'Косметология',
        'Стамотология',
        'Онкология',
        'Терапия',
        'Хирургия',
        'Зоогостиница',
        'Вызвать врача'
    ];

    return (
        <div className="cursor-pointer grid grid-cols-4 gap-4 mt-8 px-12">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="  hover:bg-blue-300 duration-200 bg-white p-4 rounded-lg shadow-md text-center"
                >
                    <p className="hover:scale-120 duration-200  text-blue-950 text-xl font-semibold">{service}</p>
                </div>
            ))}
        </div>
    );
};

export default ServiceCard;