import apiClient from "../config/apiConfig";

export const getProjectsService = async () => {
  const apiResponse = await apiClient.get("/projects");
  return apiResponse.data;
};

export const createProjectService = async (projectPayload) => {
  const apiResponse = await apiClient.post(
    "/projects",
    projectPayload
  );
  return apiResponse.data;
};

export const getProjectDetailsService = async (projectId) => {
  const apiResponse = await apiClient.get(
    `/projects/${projectId}`
  );
  return apiResponse.data;
};

export const updateProjectService = async (
  projectId,
  updatePayload
) => {
  const apiResponse = await apiClient.put(
    `/projects/${projectId}`,
    updatePayload
  );
  return apiResponse.data;
};

export const deleteProjectService = async (projectId) => {
  const apiResponse = await apiClient.delete(
    `/projects/${projectId}`
  );
  return apiResponse.data;
};