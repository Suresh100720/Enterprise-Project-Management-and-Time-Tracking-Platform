import React, { createContext, useReducer } from "react";

export const OrganizationContext = createContext();

const initialState = {
  organizations: [],
  teams: [],
  users: [],
  invitations: [],
  skills: [],
  availability: []
};

function organizationReducer(state, action) {

  switch (action.type) {

    case "SET_ORGANIZATIONS":
      return { ...state, organizations: action.payload };

    case "SET_TEAMS":
      return { ...state, teams: action.payload };

    case "SET_USERS":
      return { ...state, users: action.payload };

    case "SET_INVITATIONS":
      return { ...state, invitations: action.payload };

    case "SET_SKILLS":
      return { ...state, skills: action.payload };

    case "SET_AVAILABILITY":
      return { ...state, availability: action.payload };

    default:
      return state;
  }
}

export function OrganizationProvider({ children }) {

  const [state, dispatch] = useReducer(
    organizationReducer,
    initialState
  );

  return (
    <OrganizationContext.Provider
      value={{
        organizations: state.organizations,
        teams: state.teams,
        users: state.users,
        invitations: state.invitations,
        skills: state.skills,
        availability: state.availability,
        dispatch
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
}