import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  image: string;
  name: string;
  description: string;
  count: number;
}

export default function CategoryCard({
  image,
  name,
  description,
  count,
}: CategoryCardProps) {
  console.log(image, name, description, count);
  return (
    <button className="group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105">
      <div className="aspect-[4/3] relative">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
          <h4 className="text-xl font-bold mb-2">{name}</h4>
          <p className="text-sm text-gray-200 mb-2">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full">
              {count} plants
            </span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </button>
  );
}
