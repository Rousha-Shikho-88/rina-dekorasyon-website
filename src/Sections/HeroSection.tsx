// src/sections/HeroSection.tsx

import BackgroundImage from '../assets/hero-bg.jpg';

function HeroSection() {
    return (
        <section
            id="hero" className="relative bg-cover bg-center flex flex-col items-start justify-center text-white p-8 md:min-h-screen lg:p-16 pt-24"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 text-orange-400 drop-shadow-md">
                    Mekanlarınıza Özel
                </h2>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg">
                    İç Dekorasyon ve Bitirme İşleri
                </h1>
                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl mb-4 font-semibold opacity-90">
                    17 Yıllık Deneyim
                </p>
                <p className="text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed mb-8 max-w-full sm:max-w-md md:max-w-2xl lg:max-w-2xl opacity-90">
                    Şirketimiz, çatıdan iç ve dış cephelere kadar geniş bir yelpazede anahtar teslim inşaat ve dekorasyon hizmetleri sunmaktadır. Hizmetlerimiz arasında seramik, alçı, alçıpan, epoksi boya,
                    sıva, kalıp, duvar, demir ve makro beton uygulamaları yer almaktadır.
                </p>
                <a
                    href="https://wa.me/c/905321510336"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-base sm:px-8 sm:py-4 sm:text-xl font-semibold transition-colors duration-200 shadow-lg transform hover:scale-105 inline-block"
                >
                    Fiyat Teklifi Alın
                </a>
            </div>
        </section>
    );
}

export default HeroSection;