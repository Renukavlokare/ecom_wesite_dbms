import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-ecom-blue-light to-ecom-orange-light">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-ecom-gray-900 leading-tight">
              Shop Everything You Need at 
              <span className="text-ecom-blue block">E-Com Website</span>
            </h1>
            
            <p className="text-lg text-ecom-gray-800 max-w-md">
              Discover millions of products from trusted sellers. Fast delivery, 
              great prices, and exceptional customer service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-ecom-orange hover:bg-ecom-orange/90 text-white px-8">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-ecom-blue text-ecom-blue hover:bg-ecom-blue hover:text-white">
                Become a Seller
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-ecom-blue-light rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="h-6 w-6 text-ecom-blue" />
                </div>
                <p className="text-sm font-medium text-ecom-gray-800">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over $50</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-ecom-success-light rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-ecom-success" />
                </div>
                <p className="text-sm font-medium text-ecom-gray-800">Secure Payment</p>
                <p className="text-xs text-muted-foreground">100% protected</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-ecom-orange-light rounded-full flex items-center justify-center mx-auto mb-2">
                  <Headphones className="h-6 w-6 text-ecom-orange" />
                </div>
                <p className="text-sm font-medium text-ecom-gray-800">24/7 Support</p>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="E-commerce shopping experience" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;