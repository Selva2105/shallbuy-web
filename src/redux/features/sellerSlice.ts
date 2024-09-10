import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface SellerData {
  id: string;
  sellerName: string;
  email: string;
  contactno: string;
  profilePicture: string;
  dateOfBirth: string;
  role: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  pickupAddresses: Array<any>;
  products: Array<any>;
  SellerInfo: Array<any>;
  token?: string;
}

interface ErrorResponse {
  message: string;
}

interface LoginParams {
  email: string;
  password: string;
}

interface optParams {
  email: string;
  otp: string;
}

export const loginSeller = createAsyncThunk<
  SellerData,
  LoginParams,
  {
    rejectValue: ErrorResponse;
  }
>("seller/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/v1/seller/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      return rejectWithValue({ message: errorMessage });
    } else {
      return rejectWithValue({ message: "An unexpected error occurred" });
    }
  }
});

export const verifyOtp = createAsyncThunk<
  SellerData,
  optParams,
  {
    rejectValue: ErrorResponse;
  }
>(
  "seller/verifyOtp",
  async (
    { email, otp }: { email: string; otp: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/v1/seller/verify-otp`,
        {
          email,
          otp,
        },
      );
      localStorage.setItem("seller-token", response.data.token);
      localStorage.setItem("email", email);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        return rejectWithValue({ message: errorMessage });
      } else {
        return rejectWithValue({ message: "An unexpected error occurred" });
      }
    }
  },
);

const sellerSlice = createSlice({
  name: "seller",
  initialState: {
    seller: null as SellerData | null,
    isLoading: false,
    error: null as ErrorResponse | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginSeller.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        loginSeller.fulfilled,
        (state, action: PayloadAction<SellerData>) => {
          state.isLoading = false;
          state.seller = action.payload;
        },
      )
      .addCase(
        loginSeller.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isLoading = false;
          state.error = action.payload || {
            message: "An unknown error occurred",
          };
        },
      )
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.seller) {
          state.seller.token = action.payload.token;
          state.seller.email = action.meta.arg.email;
        }
        state.error = null;
      })
      .addCase(
        verifyOtp.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isLoading = false;
          state.error = action.payload || {
            message: "An unknown error occurred",
          };
        },
      );
  },
});

export default sellerSlice.reducer;
