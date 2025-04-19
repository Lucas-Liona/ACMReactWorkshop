interface CardProps {
  title: string;
  date: string;
  imgpath?: string; // Made optional with default placeholder
  description?: string; // Added optional description
}

export default function Card({ 
  title, 
  date, 
  imgpath = "/api/placeholder/400/300",
  description
}: CardProps) {
return (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
    {/* Image Section */}
    <img
      src={imgpath}
      alt={`${title} image`}
      className="w-full h-48 object-cover"
    />

    {/* Content Section */}
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      {description && <p className="text-sm text-gray-700">{description}</p>}
    </div>
  </div>
)
}