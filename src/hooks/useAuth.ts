import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      // Guard clause to ensure context is not undefined
      if (!context) {
        console.error(
          "AuthContext is not available. Make sure you are within an AuthProvider.",
        );
        setIsLoading(false);
        return;
      }
    };

    checkUser();
  }, [context]);

  // Another guard clause before returning to handle the case where context might be undefined
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return { ...context, isLoading };
};

export default useAuth;
