import React from 'react';
import Container from "@/components/shared/container";

const AboutSection = () => {
    return (
        <section id="about">
            <Container>
                <div className="text-white pt-16 pb-6 space-y-10">
                    <div className="flex gap-y-10">
                        <h2 className="flex text-4xl justify-center w-full font-semibold">
                            Почему нам доверяют хозяева более 5000 питомцев?
                        </h2>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-semibold">
                            Потому что мы сочетаем многолетний опыт и современные технологии с искренней заботой о каждом питомце как о полноценном члене семьи.
                        </p>
                        <p className="text-2xl font-semibold mt-4">
                            Мы обеспечиваем высочайший уровень медицины и индивидуальный подход, благодаря чему ваши питомцы остаются здоровы, а вы — спокойны.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutSection;