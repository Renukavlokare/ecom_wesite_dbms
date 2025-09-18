import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/hooks/useProducts";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product.id);
  };
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={product.image_url || "/placeholder.svg"} 
            alt={product.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          {product.discount_percentage && (
            <Badge className="absolute top-2 left-2 bg-ecom-orange text-white">
              -{product.discount_percentage}%
            </Badge>
          )}
          {product.is_new && (
            <Badge className="absolute top-2 left-2 bg-ecom-success text-white">
              New
            </Badge>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-medium text-sm text-ecom-gray-800 line-clamp-2 mb-2 group-hover:text-ecom-blue transition-colors">
            {product.title}
          </h3>

          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating) 
                      ? "fill-yellow-400 text-yellow-400" 
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviews_count})</span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold text-ecom-gray-900">
              ₹{product.price.toFixed(0)}
            </span>
            {product.original_price && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.original_price.toFixed(0)}
              </span>
            )}
          </div>

          <Button 
            className="w-full bg-ecom-orange hover:bg-ecom-orange/90 text-white"
            onClick={handleAddToCart}
            disabled={product.stock_quantity === 0}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.stock_quantity === 0 ? "Out of Stock" : "Add to Cart"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;