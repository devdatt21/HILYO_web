import React from "react";
import CategoryCard from "./CategoryCard";

interface Category {
  id: string;
  name: string;
  imageUrl: string;
  itemCount: number;
  link: string;
}

interface CategoryGridProps {
  title?: string;
  subtitle?: string;
  categories: Category[];
}

// Dummy categories data
const dummyCategories: Category[] = [
  {
    id: "1",
    name: "Kurta Sets",
    imageUrl: "/images/Kurta-sets.jpeg",
    itemCount: 120,
    link: "/categories/kurta-sets",
  },
  {
    id: "2",
    name: "Sarees & Blouses",
    imageUrl: "/images/Sarees&Blouses.jpeg",
    itemCount: 95,
    link: "/categories/sarees&blouses",
  },
  {
    id: "3",
    name: "Dresses & Jumpsuits",
    imageUrl: "/images/Dresses&Jumpsuits.jpeg",
    itemCount: 45,
    link: "/categories/dresses&jumpsuits",
  },
  {
    id: "4",
    name: "Co-Ord Sets",
    imageUrl: "/images/Co-OrdSets.jpeg",
    itemCount: 60,
    link: "/categories/co-ordsets",
  },
  {
    id: "5",
    name: "Skirt Sets",
    imageUrl: "/images/SkirtSets.jpeg",
    itemCount: 80,
    link: "/categories/skirtsets",
  },
  {
    id: "6",
    name: "Lehenga Sets",
    imageUrl: "/images/LehengaSets.jpeg",
    itemCount: 30,
    link: "/categories/lehengasets",
  },
  {
    id: "7",
    name: "Gowns",
    imageUrl: "/images/Gowns.jpeg",
    itemCount: 50,
    link: "/categories/gowns",
  },
  {
    id: "8",
    name: "Kaftans",
    imageUrl: "/images/Kaftans.jpeg",
    itemCount: 25,
    link: "/categories/kaftans",
  },
];

const CategoryGrid: React.FC<CategoryGridProps> = ({
  title,
  subtitle,
  categories,
}) => {
  return (
    <section className="py-10 px-4 md:px-6 bg-gray-50">
      {/* Section header */}
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        </div>
      )}

      {/* Category grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
};


export default function CategoryGridWrapper(){
  return(
    <CategoryGrid
      title = "Shop by Category"
      subtitle  = "Browse through our wide range of categories"
      categories = {dummyCategories}

    />
  )
}
