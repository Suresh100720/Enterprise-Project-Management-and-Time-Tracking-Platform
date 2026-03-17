import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useAuth() {
  const authContextData = useContext(AuthContext);

  if (!authContextData) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return authContextData;
}

export default useAuth;