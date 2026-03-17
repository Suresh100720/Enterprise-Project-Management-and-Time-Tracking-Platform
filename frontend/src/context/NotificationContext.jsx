import React, { createContext, useReducer } from "react";

export const NotificationContext = createContext();

const initialState = {
  notifications: []
};

function notificationReducer(state, action) {

  switch (action.type) {

    case "ADD_NOTIFICATION":
      return {
        notifications: [
          ...state.notifications,
          action.payload
        ]
      };

    case "CLEAR_NOTIFICATIONS":
      return {
        notifications: []
      };

    default:
      return state;
  }
}

export function NotificationProvider({ children }) {

  const [state, dispatch] = useReducer(
    notificationReducer,
    initialState
  );

  return (
    <NotificationContext.Provider
      value={{
        notifications: state.notifications,
        dispatch
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}