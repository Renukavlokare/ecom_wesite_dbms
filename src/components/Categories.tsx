import { 
  Smartphone, 
  Shirt, 
  Home, 
  Dumbbell, 
  Book, 
  Heart 
} from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color_class: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase
        .from("categories")
        .select("*")
        .order("name");
      
      if (data) {
        setCategories(data);
      }
    };

    fetchCategories();
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone": return Smartphone;
      case "Shirt": return Shirt;
      case "Home": return Home;
      case "Dumbbell": return Dumbbell;
      case "Book": return Book;
      case "Heart": return Heart;
      default: return Smartphone;
    }
  };

  return (
    <section className="py-12 bg-ecom-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-ecom-gray-900 mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our wide selection of products across different categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = getIcon(category.icon);
            return (
              <div
                key={category.id}
                className="group cursor-pointer bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-100 transition-colors group-hover:scale-110">
                  <IconComponent className={`h-8 w-8 ${category.color_class}`} />
                </div>
                <h3 className="font-medium text-sm text-ecom-gray-800 group-hover:text-ecom-blue transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;