import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";

const ProductGrid = () => {
  const { products, loading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electronics", "Fashion", "Home & Garden", "Sports", "Books", "Health & Beauty"];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.categories?.name === selectedCategory);

  if (loading) {
    return (
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-ecom-gray-900 mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Discover our most popular items</p>
          </div>
          <div className="flex gap-2">
            {categories.slice(0, 4).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium border rounded-lg transition-colors ${
                  category === selectedCategory
                    ? "text-ecom-blue border-ecom-blue bg-ecom-blue-light"
                    : "text-muted-foreground border-border hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Button className="px-8 py-3 bg-ecom-blue text-white rounded-lg hover:bg-ecom-blue/90 transition-colors font-medium">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;