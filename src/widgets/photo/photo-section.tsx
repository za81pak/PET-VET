import React from 'react';
import Image from 'next/image';
import Container from '@/components/shared/container';
import pet1 from '../../../public/statics/pet1.jpg';
import pet2 from '../../../public/statics/pet2.jpg';
import pet3 from '../../../public/statics/pet3.jpg';
import pet4 from '../../../public/statics/pet4.jpg';


const PhotoSection = () => {
    return (
        <section id="photo" className="py-6 bg-blue-950">
            <Container>
                <h2 className="text-3xl font-semibold text-center text-white mb-12">
                    Наша галерея
                </h2>
                <div className="w-full">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="w-full h-80">
                            <Image
                                src={pet1}
                                alt="Питомец 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full h-80">
                            <Image
                                src={pet2}
                                alt="Питомец 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full h-80">
                            <Image
                                src={pet3}
                                alt="Питомец 3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full h-80">
                            <Image
                                src={pet4}
                                alt="Питомец 4"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PhotoSection;