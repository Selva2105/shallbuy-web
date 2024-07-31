/* eslint-disable no-unused-vars */
"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios, { AxiosError } from "axios";
import { getApiUrl } from "@/lib/getApiurl";
import { ProfileFormValues } from "@/lib/form-schema";
import { User } from "@/types";
import { ChangePasswordFormValues } from "@/components/forms/settings-security/change_password_form";
import { NotificationFormValues } from "@/components/forms/settings-security/two-factor-form";

export interface ApiResponse {
  success?: boolean;
  message?: string;
}

interface ErrorResponse {
  message?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  signup: (profileData: ProfileFormValues) => Promise<boolean>;
  changePasswordApi: (
    id: string | undefined,
    data: ChangePasswordFormValues,
  ) => Promise<ApiResponse | undefined>;
  changeNotificationApi: (
    id: string | undefined,
    data: NotificationFormValues,
  ) => Promise<boolean>;
  validateSession: () => Promise<boolean>;
  verifyUser: (otp: string) => Promise<any>;
  forgotPassword: (email: string) => Promise<any>;
  changePassword: (
    token: string,
    password: string,
    confirmPassword: string,
  ) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  });

  useEffect(() => {
    const axiosInterceptor = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    return () => {
      axios.interceptors.request.eject(axiosInterceptor);
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${getApiUrl()}/v1/auth/login`, {
        email,
        password,
      });
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const signup = async (profileData: ProfileFormValues) => {
    try {
      const response = await axios.post(
        `${getApiUrl()}/v1/auth/user`,
        profileData,
      );
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      return true;
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(`${getApiUrl()}/v1/auth/logout`);
      if (response.data.status === "success") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  const validateSession = async () => {
    try {
      const token = localStorage.getItem("token");
      // Here, you would typically send a request to your backend to validate the token
      // For simplicity, let's assume a direct client-side check
      if (token) {
        // Simulate token validation logic
        return true;
      }
      return false;
    } catch (error) {
      console.error("Session validation failed:", error);
      return false;
    }
  };

  const changePasswordApi = async (
    id: string | undefined,
    data: ChangePasswordFormValues,
  ) => {
    try {
      let response = await axios.put(
        `${getApiUrl()}/v1/auth/user/updatePassword/${id}`,
        data,
      );
      if (response.data.status === "success") return { success: true };
    } catch (error) {
      const axiosError = error as AxiosError; // Cast error to AxiosError
      const errorMessage: ErrorResponse = axiosError.response
        ?.data as ErrorResponse;
      return {
        success: false,
        message: errorMessage.message || "An error occurred",
      };
    }
  };

  const changeNotificationApi = async (
    id: string | undefined,
    data: NotificationFormValues,
  ) => {
    try {
      let response = await axios.put(
        `${getApiUrl()}/v1/auth/user/updateNotification/${id}`,
        data,
      );
      if (response.data.status === "success") {
        const { user } = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const verifyUser = async (otp: string) => {
    try {
      const response = await axios.patch(
        `${getApiUrl()}/v1/auth/verifyEmail/${user?._id}`,
        {
          emailVerificationOTP: otp,
        },
      );
      return response.data;
    } catch (error) {
      return false;
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      const response = await axios.post(
        `${getApiUrl()}/v1/auth/forgotPassword`,
        { email },
      );
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  };

  const changePassword = async (
    token: string,
    password: string,
    confirmPassword: string,
  ) => {
    try {
      const response = await axios.post(
        `${getApiUrl()}/v1/auth/resetPassword/${token}`,
        { password, confirmPassword },
      );
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
        validateSession,
        changePasswordApi,
        changeNotificationApi,
        verifyUser,
        forgotPassword,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
