"use client";

import { ProductCard } from "@/components/product-component/product-card";
import { fetchProducts } from "@/redux/features/productSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import ProductSider from "@/components/product-component/product-sider";

const Listing: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<string>("low-to-high");

  useEffect(() => {
    const sortOrder = price === "low-to-high" ? "asc" : "desc";
    dispatch(fetchProducts({ sortBy: "price", sortOrder, category }));
  }, [dispatch, price, category]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-6 p-6">
      <ProductSider onCategoryChange={setCategory} onPriceChange={setPrice} />
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Products</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <p>Loading products...</p>
          ) : (
            data.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Listing;
