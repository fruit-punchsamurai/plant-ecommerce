interface Category {
  name: string;
  image: string;
  count: number;
  description: string;
}

export const categories: Category[] = [
  {
    name: "Indoor Plants",
    image: "/images/indoor-category.jpg",
    count: 3,
    description: "Perfect houseplants for any indoor space",
  },
  {
    name: "Low Light",
    image: "/images/low-light-category.jpg",
    count: 2,
    description: "Thrives in darker corners of your home",
  },
  {
    name: "Statement Plants",
    image: "/images/statement-category.jpg",
    count: 2,
    description: "Bold, dramatic plants that make an impact",
  },
  {
    name: "Hanging Plants",
    image: "/images/hanging-category.jpg",
    count: 1,
    description: "Beautiful trailing plants for elevated spaces",
  },
];
