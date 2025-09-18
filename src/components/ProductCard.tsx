import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
  isNew?: boolean;
}

const ProductCard = ({ 
  title, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  image, 
  discount,
  isNew 
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          {discount && (
            <Badge className="absolute top-2 left-2 bg-ecom-orange text-white">
              -{discount}%
            </Badge>
          )}
          {isNew && (
            <Badge className="absolute top-2 left-2 bg-ecom-success text-white">
              New
            </Badge>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-medium text-sm text-ecom-gray-800 line-clamp-2 mb-2 group-hover:text-ecom-blue transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(rating) 
                      ? "fill-yellow-400 text-yellow-400" 
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold text-ecom-gray-900">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button className="w-full bg-ecom-orange hover:bg-ecom-orange/90 text-white">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;