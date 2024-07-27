/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { Slider } from "../ui/slider";

interface ProductSiderProps {
  onCategoryChange: (value: string) => void;
  onPriceChange: (value: string) => void;
}

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

const ProductSider: React.FC<ProductSiderProps> = ({
  onCategoryChange,
  onPriceChange,
}) => {
  return (
    <div className="bg-background rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="icon">
          <XIcon className="w-5 h-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <div className="grid gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold">Category :</h3>
          <Select onValueChange={onCategoryChange}>
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
          <h3 className="text-sm font-semibold">Price :</h3>
          <Select onValueChange={onPriceChange}>
            <SelectTrigger aria-label="Price">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low-to-high">Low to High</SelectItem>
              <SelectItem value="high-to-low">High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold">Sort by </h3>
          <SelectSeparator className="bg-gray-400" />

          <h3>Price range</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductSider;
