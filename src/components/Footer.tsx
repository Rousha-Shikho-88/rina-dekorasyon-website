// src/components/Footer.tsx


import {FaInstagram, FaWhatsapp  } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               
                <div className="flex justify-center space-x-6 mb-8">
                    
                    <a target='_blank' href="https://www.instagram.com/rinaicdekorasyon?igsh=MXYwYWc1Nmd0ODlndg==" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 transform hover:scale-110">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a target='_blank' href="https://wa.me/905321510336" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 transform hover:scale-110">
                        <FaWhatsapp className="w-6 h-6" />
                    </a>
                    
                    
                </div>

                
                <div className="flex justify-center space-x-6 md:space-x-8 text-md font-medium mb-8">
                    <a href="#hero" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">Ana Sayfa</a>
                    <a href="#about" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">Hakkımızda</a>
                    <a href="#servises" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-105">Hizmetler</a>
                </div>

               
                <div className="border-t border-gray-700 mx-auto w-full mb-8" style={{ maxWidth: '500px' }}></div>

               
                <p className="text-sm">
                    © 2025 RINA. Tüm hakları saklıdır.
                </p>
            </div>
        </footer>
    );
};

export default Footer;