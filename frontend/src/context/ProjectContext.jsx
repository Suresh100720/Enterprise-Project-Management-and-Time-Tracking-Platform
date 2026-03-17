import React, { createContext, useReducer } from "react";

export const ProjectContext = createContext();

const initialState = {
  projects: [],
  tasks: [],
  milestones: [],
  reports: []
};

function projectReducer(state, action) {

  switch (action.type) {

    case "SET_PROJECTS":
      return { ...state, projects: action.payload };

    case "SET_TASKS":
      return { ...state, tasks: action.payload };

    case "SET_MILESTONES":
      return { ...state, milestones: action.payload };

    case "SET_REPORTS":
      return { ...state, reports: action.payload };

    default:
      return state;
  }
}

export function ProjectProvider({ children }) {

  const [state, dispatch] = useReducer(
    projectReducer,
    initialState
  );

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        tasks: state.tasks,
        milestones: state.milestones,
        reports: state.reports,
        dispatch
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}