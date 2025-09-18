import ProductCard from "./ProductCard";
import headphonesImg from "@/assets/headphones.jpg";
import smartwatchImg from "@/assets/smartwatch.jpg";
import laptopImg from "@/assets/laptop.jpg";
import jacketImg from "@/assets/jacket.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones - Premium Sound Quality",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 2847,
      image: headphonesImg,
      discount: 20,
      isNew: false
    },
    {
      id: 2,
      title: "Smart Watch with Fitness Tracker and Heart Rate Monitor",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.8,
      reviews: 1523,
      image: smartwatchImg,
      discount: 33,
      isNew: false
    },
    {
      id: 3,
      title: "Gaming Laptop - High Performance for Work and Play",
      price: 899.99,
      originalPrice: 1199.99,
      rating: 4.6,
      reviews: 986,
      image: laptopImg,
      discount: 25,
      isNew: false
    },
    {
      id: 4,
      title: "Vintage Denim Jacket - Classic Style for Every Season",
      price: 49.99,
      rating: 4.3,
      reviews: 654,
      image: jacketImg,
      isNew: true
    },
    {
      id: 5,
      title: "Wireless Bluetooth Headphones - Premium Sound Quality",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 2847,
      image: headphonesImg,
      discount: 20,
      isNew: false
    },
    {
      id: 6,
      title: "Smart Watch with Fitness Tracker and Heart Rate Monitor",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.8,
      reviews: 1523,
      image: smartwatchImg,
      discount: 33,
      isNew: false
    },
    {
      id: 7,
      title: "Gaming Laptop - High Performance for Work and Play",
      price: 899.99,
      originalPrice: 1199.99,
      rating: 4.6,
      reviews: 986,
      image: laptopImg,
      discount: 25,
      isNew: false
    },
    {
      id: 8,
      title: "Vintage Denim Jacket - Classic Style for Every Season",
      price: 49.99,
      rating: 4.3,
      reviews: 654,
      image: jacketImg,
      isNew: true
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-ecom-gray-900 mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Discover our most popular items</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium text-ecom-blue border border-ecom-blue rounded-lg hover:bg-ecom-blue-light transition-colors">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-lg hover:bg-muted transition-colors">
              Electronics
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-lg hover:bg-muted transition-colors">
              Fashion
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-lg hover:bg-muted transition-colors">
              New Arrivals
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-ecom-blue text-white rounded-lg hover:bg-ecom-blue/90 transition-colors font-medium">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;