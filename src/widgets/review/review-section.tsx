import React from 'react';
import Image from 'next/image';
import Container from '@/components/shared/container';
import human1 from '../../../public/statics/icons/human1.svg';
import human2 from '../../../public/statics/icons/human2.svg';
import human3 from '../../../public/statics/icons/human3.svg';

const ReviewSection = () => {
    return (
        <section id="review" className="py-16">
            <Container>
                <h2 className="text-3xl font-semibold flex justify-center text-white mb-12">Отзывы</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                <Image
                                    src={human1}
                                    alt="Алексей Б."
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-blue-950 font-semibold">Алексей Б.</p>
                        </div>
                        <p className="text-blue-950 mb-4">
                            Мне очень нравится ветклиника PET&VET. Врачи очень хорошие, приветливые, всегда объяснят, расскажут и покажут. Таких внимательных врачей я еще не встречал. Всем рекомендую, клиника проверенная. Всем здоровья, но если случилось несчастье с питомцем, то только PET&VET.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                <Image
                                    src={human2}
                                    alt="Анатолий А."
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-blue-950 font-semibold">Анатолий А.</p>
                        </div>
                        <p className="text-blue-950 mb-4">
                            Год назад лечил собаку в этой клинике от отравления. Собаку отравил сосед по даче. Я еле ее довез до клинике, думал уже не спасут. Но на счастье руки у врачей оказались просто волшебными. С того света вернули мне собаку. Искренне спасибо Вам за ваш профессионализм и внимание.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                <Image
                                    src={human3}
                                    alt="Сергей В."
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-blue-950 font-semibold">Сергей В.</p>
                        </div>
                        <p className="text-blue-950 mb-4">
                            Я являюсь постоянным клиентом ветклиники зоодоктор, сегодня я зашла в клинику PET&VET проконсультироваться, а там проходит акция – дарят собачий корм. Было приятно получить призент, уже сказал своим друзьям – обещали так же принять участие в данной акции.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ReviewSection;