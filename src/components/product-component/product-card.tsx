import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  console.log(product);
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-md">
      <CardHeader className="flex flex-col items-center p-4">
        <img
          src={product.images}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-48 object-contain"
        />
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">${product.price}</span>
          <Button variant="default">Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
}
