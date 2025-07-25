// src/components/ServiceCard.tsx


interface ServiceCardProps {
    image: string;
    title: string; 
    description: string; 
}

function ServiceCard({ image, title, description }: ServiceCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
            
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover object-center"
            />
           
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

export default ServiceCard;