const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-neutral-950 transition-shadow duration-500">
   
      <div className="h-56 overflow-hidden">
        <img 
          src={imageSrc || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      
      {/* Border as a separate element */}
      <div className="h-2 bg-gray-300 w-full"></div>
      
      <div className="p-6">
        <h3 className="text-green-700 text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;