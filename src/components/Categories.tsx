import { Smartphone, Laptop, Home, Car, Gamepad2, Book, Shirt, Heart } from "lucide-react";

const Categories = () => {
  const categories = [
    { id: 1, name: "Electronics", icon: Smartphone, color: "bg-blue-100 text-blue-600" },
    { id: 2, name: "Computers", icon: Laptop, color: "bg-purple-100 text-purple-600" },
    { id: 3, name: "Home & Garden", icon: Home, color: "bg-green-100 text-green-600" },
    { id: 4, name: "Automotive", icon: Car, color: "bg-red-100 text-red-600" },
    { id: 5, name: "Gaming", icon: Gamepad2, color: "bg-yellow-100 text-yellow-600" },
    { id: 6, name: "Books", icon: Book, color: "bg-indigo-100 text-indigo-600" },
    { id: 7, name: "Fashion", icon: Shirt, color: "bg-pink-100 text-pink-600" },
    { id: 8, name: "Health & Beauty", icon: Heart, color: "bg-orange-100 text-orange-600" }
  ];

  return (
    <section className="py-12 bg-ecom-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-ecom-gray-900 mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our wide selection of products across different categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group cursor-pointer bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="font-medium text-sm text-ecom-gray-800 group-hover:text-ecom-blue transition-colors">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;