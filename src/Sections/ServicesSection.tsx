// src/sections/ServicesSection.tsx

import ServiceCard from '../components/ServiceCard';


import service1 from '../assets/1.png';
import service2 from '../assets/2.png';
import service3 from '../assets/3.png';
import service4 from '../assets/4.png';
import service5 from '../assets/5.png';
import service6 from '../assets/6.png';
import service7 from '../assets/7.png';
import service8 from '../assets/8.png';
import service9 from '../assets/9.png';
import service10 from '../assets/10.png';
import service11 from '../assets/11.png';
import service12 from '../assets/12.png';


function ServicesSection() {
   
    const services = [
        {
            image: service1,
            title: 'Çatı Sistemleri',
            description: 'Binalarınızı dış etkenlerden koruyan dayanıklı ve uzun ömürlü çatı sistemleri uygulamalarıyla güvenliği sağlıyoruz.',
        },
        {
            image: service2,
            title: 'Seramik Uygulamaları',
            description: 'Mekanlarınıza estetik ve hijyenik bir dokunuş katan farklı model ve desenlerde seramik döşeme hizmetleri sunuyoruz.',
        },
        {
            image: service3,
            title: 'Alçı ve Alçıpan İşleri',
            description: 'İç mekanlarda modern bölmeler, asma tavanlar ve dekoratif detaylar için profesyonel alçı ve alçıpan çözümleri sunuyoruz.',
        },
        {
            image: service4,
            title: 'Epoksi Boya Hizmetleri',
            description: 'Zeminlere ve duvarlara dayanıklılık, parlaklık ile kolay temizlenebilirlik katan özel epoksi boya uygulamaları yapıyoruz.',
        },
        {
            image: service5,
            title: 'Sıva Uygulamaları',
            description: 'Duvarlarınıza pürüzsüz ve estetik bir yüzey kazandıran, sağlam ve kaliteli iç-dış sıva işçiliği sağlıyoruz.',
        },
        {
            image: service6,
            title: 'Kalıp İşleri',
            description: 'Betonarme yapıların şekillendirilmesi için titizlikle hazırlanan modern ve güvenilir kalıp sistemleri kurulum hizmeti veriyoruz.',
        },
        {
            image: service7,
            title: 'Duvar Örme İşleri',
            description: 'Projelerinizin temelini oluşturan, sağlam ve standartlara uygun tuğla veya beton blok duvar örme işçiliği sağlıyoruz.',
        },
        {
            image: service8,
            title: 'Demir İşleri',
            description: 'Yapıların iskeletini güçlendiren demir donatı ve çeşitli metal konstrüksiyon işleriyle projelerinize sağlamlık katıyoruz.',
        },
        {
            image: service9,
            title: 'İç Cephe Tasarımı ve Uygulaması',
            description: 'Mekanlarınızın atmosferini belirleyen, estetik ve fonksiyonel iç cephe tasarımları ile uygulama çözümleri sunuyoruz.',
        },
        {
            image: service10,
            title: 'Dış Cephe Çözümleri',
            description: 'Binalarınızın ilk izlenimini oluşturan, dayanıklı ve modern dış cephe kaplama ve boya sistemleri uyguluyoruz.',
        },
        {
            image: service11,
            title: 'Anahtar Teslim Projeler',
            description: 'Tüm inşaat ve tadilat sürecini baştan sona yöneterek, detaylı planlamadan uygulamaya kadar her aşamayı tamamlıyoruz.',
        },
        {
            image: service12,
            title: 'Makro Beton Uygulamaları',
            description: 'Estetik ve endüstriyel alanlar için yüksek dayanıklılığa sahip, modern görünümlü makro beton zemin uygulamaları yapıyoruz.',
        },
    ];

    return (
        <section id="servises" className="py-16 md:py-24 bg-[#FFFDFA] text-gray-800">
            <div className="container mx-auto px-4">
                
                <div className="text-center mb-12">
                    <p className="text-lg md:text-xl font-semibold text-gray-700 mb-2">Hizmetlerimiz</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                        Rina İç Dekorasyon olarak,
                    </h2>
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                        mekanlarınıza değer katacak geniş yelpazede <span className="text-orange-500">çözümler sunuyoruz.</span>
                    </p>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index} 
                            image={service.image}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;