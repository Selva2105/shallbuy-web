"use client";

import { useState, SetStateAction, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { fetchProducts } from "@/redux/features/productSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/lib/hooks";
import { ProductCard } from "@/components/product-component/product-card";
import { Filter, ListOrdered } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Component() {
  const dispatch: AppDispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.products,
  );

  // Use me when state is needed
  // const [category, setCategory] = useState<string>("");
  // const [price, setPrice] = useState<string>("low-to-high");
  //  const [filterBy, setFilterBy] = useState({
  //     category: [],
  //     price: { min: 0, max: Infinity },
  // })
  const [sortBy, setSortBy] = useState("featured");
  const category = "ALL";
  const price = "low-to-high";
  const filterBy = {
    category: [],
    price: { min: 0, max: Infinity },
  };

  useEffect(() => {
    const sortOrder = price === "low-to-high" ? "asc" : "desc";
    dispatch(fetchProducts({ sortBy: "price", sortOrder, category }));
  }, [dispatch, price, category]);

  if (error) return <p>Error: {error}</p>;

  const handleSortChange = (value: SetStateAction<string>) => {
    setSortBy(value);
  };

  const handleFilterChange = () => {
    console.log("Applying filters:", filterBy);
  };

  const CategoryType = [
    "ALL",
    "ELECTRONICS",
    "FASHION",
    "HOME_APPLIANCES",
    "BOOKS",
    "TOYS",
    "GROCERIES",
    "BEAUTY",
    "SPORTS",
    "AUTOMOTIVE",
    "FURNITURE",
    "JEWELRY",
    "MUSIC",
    "OFFICE_SUPPLIES",
    "PET_SUPPLIES",
    "GARDEN",
    "HEALTH",
    "BABY",
    "VIDEO_GAMES",
    "MOVIES",
    "SOFTWARE",
    "ART",
    "SOFTWARE",
    "ART",
    "CRAFTS",
    "INDUSTRIAL",
    "OUTDOORS",
    "TRAVEL",
  ];

  const formatCategoryLabel = (category: string) => {
    return category
      .toLowerCase()
      .replace(/_/g, " ")
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <ListOrdered className="h-4 w-4" />
                <span>Sort by</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup
                value={sortBy}
                onValueChange={handleSortChange}
              >
                <DropdownMenuRadioItem value="featured">
                  Featured
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="priceAsc">
                  Price: Low to High
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="priceDesc">
                  Price: High to Low
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="newest">
                  Newest
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="p-4 grid gap-4">
                <div className="bg-background rounded-lg">
                  <div className="grid gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-semibold">Category :</h3>
                      <Select>
                        <SelectTrigger aria-label="Category">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {CategoryType.map((category, index) => (
                            <SelectItem key={index} value={category}>
                              {formatCategoryLabel(category)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-semibold">Sort by </h3>
                      <SelectSeparator className="bg-gray-400" />

                      <h3>Price range</h3>
                    </div>
                  </div>
                  <Button onClick={handleFilterChange}>Apply</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          data.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
