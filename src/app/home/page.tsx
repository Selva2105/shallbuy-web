"use client";

import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    let result = await logout();

    if (result) {
      router.push("/login");
    }
  };

  return (
    <div>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </div>
  );
};

export default Home;
