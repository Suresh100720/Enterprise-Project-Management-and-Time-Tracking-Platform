import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

function useProjects() {

  const projectContextState = useContext(ProjectContext);

  if (!projectContextState) {
    throw new Error("useProjects must be used inside ProjectProvider");
  }

  return projectContextState;
}

export default useProjects;