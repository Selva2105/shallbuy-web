import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserData {
  username: string;
  contactno: string;
}

interface ErrorResponse {
  message: string;
}

interface UpdateProfileParams {
  id: string;
  userData: UserData;
}

// Fetch user details from local storage for initial state
const initialStateValue = (): UserData => {
  // Check if code is running in a browser environment
  if (typeof window !== "undefined") {
    const userString = localStorage.getItem("user");
    return userString ? JSON.parse(userString) : {};
  }
  // Return a default state if not in a browser environment
  return { username: "", contactno: "" };
};

export const updateUserProfile = createAsyncThunk<
  UserData,
  UpdateProfileParams,
  {
    rejectValue: ErrorResponse;
  }
>("userProfile/update", async ({ id, userData }, { rejectWithValue }) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_API_URL}/v1/auth/user/${id}`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    // Update local storage with new user details
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.message });
    } else {
      return rejectWithValue({ message: "An unexpected error occurred" });
    }
  }
});

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    user: initialStateValue(),
    isLoading: false,
    error: null as ErrorResponse | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(
        updateUserProfile.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.isLoading = false;
          state.error = action.payload || {
            message: "An unknown error occurred",
          };
        },
      );
  },
});

export default userProfileSlice.reducer;
