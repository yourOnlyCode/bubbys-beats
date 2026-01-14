import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  color: "cinema" | "videogame" | "beats";
  href: string;
}

export default function CategoryCard({ title, description, color, href }: CategoryCardProps) {
  const colorClasses = {
    cinema: "from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800",
    videogame: "from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800",
    beats: "from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800",
  };

  return (
    <Link href={href}>
      <div
        className={`relative h-64 rounded-lg bg-gradient-to-br ${colorClasses[color]} text-white p-8 flex flex-col justify-between transition transform hover:scale-105 cursor-pointer shadow-lg`}
      >
        <div>
          <h3 className="text-3xl font-bold mb-3">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          Explore <ArrowRight size={20} />
        </div>
      </div>
    </Link>
  );
}
