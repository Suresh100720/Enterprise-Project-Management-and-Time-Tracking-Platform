import { createContext, useReducer } from "react";

const initialState = {
  user: null,
  token: null,
  organization: null,
  projects: [],
  notifications: []
};

export const AppStore = createContext();

function appReducer(state, action) {
  switch (action.type) {

    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };

    case "LOGOUT":
      return initialState;

    case "SET_ORGANIZATION":
      return {
        ...state,
        organization: action.payload
      };

    case "SET_PROJECTS":
      return {
        ...state,
        projects: action.payload
      };

    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      };

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStore.Provider value={{ state, dispatch }}>
      {children}
    </AppStore.Provider>
  );
}