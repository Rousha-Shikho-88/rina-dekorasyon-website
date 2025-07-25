// src/sections/ContactSection.tsx
import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'; 

function ContactSection() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Gönderiliyor...");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "9602dc42-b4a7-4829-84ff-3259c14f9b38");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Formunuz başarıyla gönderildi.");
            event.currentTarget.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
       
        <section className="py-16 md:py-24 bg-[#FFFDFA] text-gray-800">
            <div className="container mx-auto px-4">
                
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
                 
                    <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"> 
                            Bize <span className="text-orange-500">Ulaşın</span> 
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
                            Bizimle iletişime geçmek için aşağıdaki formu doldurabilir veya iletişim
                            bilgilerimizden bize ulaşabilirsiniz. Görüşleriniz, sorularınız ve önerileriniz bizim için çok değerlidir.
                        </p>

                        
                        <div className="space-y-4 text-left w-full max-w-sm mt-6"> 
                            
                            <div className="flex items-center space-x-3">
                                <EnvelopeIcon className="h-6 w-6 text-gray-800" /> {/* أيقونة البريد الإلكتروني */}
                                <p className="text-lg font-semibold text-gray-800">
                                    <a href="mailto:marasyurtdernek@gmail.com" className="text-gray-800 hover:text-orange-500 transition-colors duration-200"> {/* غير لون الرابط إلى text-gray-800 */}
                                        rinaicdekorasyon@gmail.com
                                    </a>
                                </p>
                            </div>
                          
                            <div className="flex items-center space-x-3">
                                <PhoneIcon className="h-6 w-6 text-gray-800" /> {/* أيقونة الهاتف */}
                                <p className="text-lg font-semibold text-gray-800">
                                    <a href="tel:+90 532 151 03 36" className="text-gray-800 hover:text-orange-500 transition-colors duration-200"> {/* غير لون الرابط */}
                                        +90 532 151 03 36
                                    </a>
                                </p>
                            </div>
                           
                            <div className="flex items-start space-x-3"> {/* items-start للمحاذاة العلوية مع العنوان الطويل */}
                                <MapPinIcon className="h-6 w-6 text-gray-800 mt-1 flex-shrink-0" /> {/* أيقونة الموقع، flex-shrink-0 لضمان عدم تقلصها */}
                                <address className="text-base text-gray-700 not-italic">
                                    Adres  /Firuzköy bulvarı no 22/b blok kat 4 avcilar/İstanbul, Türkiye
                                </address>
                            </div>
                        </div>
                    </div>

                  
                    <div className="w-full md:w-1/2 lg:w-3/5 bg-white p-8 rounded-lg shadow-xl"> {/* <-- تعديلات هنا */}
                        
                        
                        <form className="space-y-6" onSubmit={onSubmit}>
                            <div>
                               
                                <label className="block mb-1 font-medium">Adınız</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 placeholder-gray-500"
                                    placeholder="Adınızı girin" // <-- Placeholder أصبح نص العنوان
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Telefon Numaranız</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 placeholder-gray-500"
                                    placeholder="Telefon numaranızı girin" // <-- Placeholder أصبح نص العنوان
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Mesajınız</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y text-gray-700 placeholder-gray-500"
                                    placeholder="Mesajınızı buraya yazın" // <-- Placeholder أصبح نص العنوان
                                ></textarea>
                            </div>
                            {/* زر الإرسال: خلفية سوداء صلبة */}
                            <button
                                type="submit"
                                className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200" // <-- تعديلات هنا
                            >
                                Gönder
                            </button>
                        </form>
                        <span>{result }</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;