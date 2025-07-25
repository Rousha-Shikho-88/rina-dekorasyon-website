// src/sections/AboutUsSection.tsx

import WorkerImage from '../assets/worker.webp'; 
import AboutUsBackground from '../assets/bg_aboutUs.png'; 

function AboutUsSection() {
    return (
        <section
           
            id="about" className="py-16 md:py-24 text-gray-800 relative overflow-hidden bg-[#FFFDFA] md:bg-cover md:bg-center"
            style={{
                
            }}
        >

            <div
                className="absolute inset-0 z-0 hidden md:block bg-cover bg-center"
                style={{ backgroundImage: `url(${AboutUsBackground})` }}
            ></div>
            
            <div className="absolute inset-0 z-10 hidden md:block  opacity-30"></div>


            <div className="container mx-auto px-4 relative z-20"> {/* المحتوى z-20 ليظهر فوق الخلفية */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-2/5 relative">
                        <img
                            src={WorkerImage}
                            alt="Worker"
                            className="w-full h-auto rounded-3xl object-cover shadow-xl transform translate-x-0 md:translate-x-0 xl:translate-x-0"
                        />
                    </div>

                    <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 text-center md:text-left">
                            Biz <span className="text-orange-500">Kimiz?</span>
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
                            Şirketimiz Rina İç Dekorasyon, 17 yılı aşkın tecrübesiyle iç mekanlara
                            estetik ve fonksiyonellik katmaktadır.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                            Müşteri memnuniyetini ön planda tutarak, hayalinizdeki yaşam
                            alanlarını gerçeğe dönüştürüyoruz.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUsSection;