/* eslint-disable no-unused-vars */
"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { getApiUrl } from "@/lib/getApiurl";
import { ProfileFormValues } from "@/lib/form-schema";

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  signup: (profileData: ProfileFormValues) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
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

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
