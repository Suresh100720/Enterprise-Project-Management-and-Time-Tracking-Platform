import React, { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const initialState = {
  user: null,
  token: null,
  loading: true
};

function authReducer(state, action) {
  switch (action.type) {

    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      };

    case "LOGOUT":
      return {
        user: null,
        token: null,
        loading: false
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false
      };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      dispatch({
        type: "LOGIN",
        payload: {
          token: savedToken,
          user: JSON.parse(savedUser)
        }
      });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, []);

  const loginUser = (userData, token) => {

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));

    dispatch({
      type: "LOGIN",
      payload: { user: userData, token }
    });
  };

  const logoutUser = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        loading: state.loading,
        loginUser,
        logoutUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}