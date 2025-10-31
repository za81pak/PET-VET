import React from 'react';
import Image from 'next/image';
import Container from '@/components/shared/container';
import email from '../../../public/statics/icons/email.svg';
import instagram from '../../../public/statics/icons/instagram.svg';
import whatsapp from '../../../public/statics/icons/whatsapp.svg';

const Footer = () => {
    return (
        <footer className=" font-semibold bg-white text-blue-950 py-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">PET&VET</h3>
                        <p className="mb-2">Ветеринарная клиника</p>
                        <p className="mb-4">Нужна срочная помощь?</p>
                        <div className="cursor-pointer flex items-center mb-2">
                            <Image src={email} alt="Телефон 1" width={20} height={20} className="mr-2" />
                            <span>petvet@gmail.com</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Режим работы:</h4>
                        <p className="mb-2">Пн-Пт: с 10:00 до 19:00</p>
                        <p className="mb-2">Сб: с 10:00 до 17:00</p>
                        <p className="mb-4">Вс: с 10:00 до 14:00</p>

                        <div className=" cursor-pointer flex items-center mb-2">
                            <Image src={instagram} alt="Телефон 2" width={20} height={20} className="mr-2" />
                            <span>+7 (900) 123-45-67</span>
                        </div>
                    </div>
                    <div>
                        <button className="cursor-pointer transition-all hover:scale-105 duration-400  bg-blue-600 hover:bg-blue-950 text-white py-2 px-4 rounded mb-4">
                            Вызвать врача
                        </button>

                        <div className="cursor-pointer flex items-center">
                            <Image src={whatsapp} alt="Телефон 3" width={20} height={20} className="mr-2" />
                            <span>+7 (900) 123-45-67</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                    <p>© {new Date().getFullYear()} PET&VET. Все права защищены.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;