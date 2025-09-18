import { Search, ShoppingCart, User, Heart, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate("/auth");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      {/* Top bar */}
      <div className="bg-ecom-blue text-primary-foreground py-2">
        <div className="container mx-auto px-4 text-sm text-center">
          Free shipping on orders over ₹50 • Shop now and save!
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <div className="bg-gradient-to-r from-ecom-blue to-ecom-orange p-2 rounded-lg">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <h1 className="text-2xl font-bold text-ecom-gray-900">E-Com</h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Input
                placeholder="Search for products, brands and more..."
                className="pr-12 h-12 text-base"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 bg-ecom-orange hover:bg-ecom-orange/90 h-10 px-4"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hidden md:flex">
                    <User className="h-5 w-5 mr-2" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="sm" className="hidden md:flex" onClick={handleAuthAction}>
                <User className="h-5 w-5 mr-2" />
                Sign In
              </Button>
            )}
            
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="h-5 w-5" />
              <Badge 
                variant="secondary" 
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-ecom-orange text-white text-xs"
              >
                0
              </Badge>
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge 
                  variant="secondary" 
                  className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-ecom-orange text-white text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t bg-ecom-gray-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-6 text-sm">
            <Button variant="ghost" size="sm" className="font-medium">All Categories</Button>
            <Button variant="ghost" size="sm">Electronics</Button>
            <Button variant="ghost" size="sm">Fashion</Button>
            <Button variant="ghost" size="sm">Home & Garden</Button>
            <Button variant="ghost" size="sm">Sports</Button>
            <Button variant="ghost" size="sm">Books</Button>
            <Button variant="ghost" size="sm">Health & Beauty</Button>
            <Button variant="ghost" size="sm" className="text-ecom-orange font-medium">Today's Deals</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;