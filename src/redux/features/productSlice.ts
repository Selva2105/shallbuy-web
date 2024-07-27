import { getAllproducts } from "@/services/productSevice";
import { Product } from "@/types/product";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({
    sortBy,
    sortOrder,
    category,
  }: {
    sortBy: string;
    sortOrder: string;
    category: string;
  }) => {
    const data = await getAllproducts(sortBy, sortOrder, category);
    return data;
  },
);

// Define the interface for the slice state

interface ProductData {
  data: Product[];
  status: string;
  message: string;
  length: number;
}
interface ProductState {
  data: ProductData;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  data: {
    data: [],
    status: "",
    message: "",
    length: 0,
  },
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default productSlice.reducer;
