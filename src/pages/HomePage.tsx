import CategoryCard from "../components/CategoryCard";
import HeroSection from "../components/HeroSection";
import { categories } from "../data";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* CATEGORY CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect plants for your space and lifestyle. Each category
            is carefully curated for specific needs and environments.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category) => (
            <CategoryCard
              image={category.image}
              name={category.name}
              description={category.description}
              count={category.count}
            />
          ))}
        </div>
      </section>
    </>
  );
}
