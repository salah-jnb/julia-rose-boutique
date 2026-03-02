export type Category = "Casual" | "Soirée" | "Mariage" | "Été";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  image: string;
  stock: number;
}

export const products: Product[] = [
  { id: 1, name: "Robe Florale Elise", price: 380, category: "Casual", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop", stock: 15 },
  { id: 2, name: "Robe de Soirée Lumina", price: 750, category: "Soirée", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop", stock: 8 },
  { id: 3, name: "Robe Bohème Clara", price: 420, category: "Casual", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop", stock: 12 },
  { id: 4, name: "Robe Mariage Léa", price: 1200, category: "Mariage", image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=400&h=500&fit=crop", stock: 5 },
  { id: 5, name: "Robe Été Zoé", price: 290, category: "Été", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop", stock: 20 },
  { id: 6, name: "Robe Cocktail Nina", price: 650, category: "Soirée", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop", stock: 10 },
  { id: 7, name: "Robe Dentelle Sofia", price: 520, category: "Soirée", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop", stock: 7 },
  { id: 8, name: "Robe Midi Rose Amina", price: 340, category: "Casual", image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=400&h=500&fit=crop", stock: 18 },
  { id: 9, name: "Robe Longue Élégante", price: 480, category: "Soirée", image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=400&h=500&fit=crop", stock: 9 },
  { id: 10, name: "Robe Festive Yasmine", price: 590, category: "Soirée", image: "https://images.unsplash.com/photo-1583396082510-0cdb99b7af33?w=400&h=500&fit=crop", stock: 6 },
  { id: 11, name: "Robe Casual Chic Lina", price: 310, category: "Casual", image: "https://images.unsplash.com/photo-1623609163859-ca93c959b98a?w=400&h=500&fit=crop", stock: 22 },
  { id: 12, name: "Robe Brodée Nora", price: 460, category: "Été", image: "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=400&h=500&fit=crop", stock: 11 },
];
