import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { Heart, ShoppingBag, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  console.log(product);
  return (
    <Card key={product.id} className="overflow-hidden">
      <div className="relative">
        <img
          src={product.images}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-32 object-cover group-hover:opacity-80 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold line-clamp-2 text-ellipsis ">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 text-ellipsis ">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              ${Number(product.discountedPrice).toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              ${Number(product.price).toFixed(2)}
            </span>
          </div>
          <Heart className="size-5 mr-2 cursor-pointer" />
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <div className="flex gap-2 justify-between w-full">
          <Button size="sm" variant="outline">
            <ShoppingCart className="size-4 mr-2" />
            Add to Cart
          </Button>
          <Button size="sm">
            {" "}
            <ShoppingBag className="size-4 mr-2" />
            Buy Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
