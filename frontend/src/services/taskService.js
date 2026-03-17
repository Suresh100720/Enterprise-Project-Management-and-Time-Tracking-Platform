import apiClient from "../config/apiConfig";

export const getTasksService = async (projectId) => {
  const apiResponse = await apiClient.get(
    `/tasks/project/${projectId}`
  );
  return apiResponse.data;
};

export const createTaskService = async (taskPayload) => {
  const apiResponse = await apiClient.post(
    "/tasks",
    taskPayload
  );
  return apiResponse.data;
};

export const updateTaskService = async (
  taskId,
  updatePayload
) => {
  const apiResponse = await apiClient.put(
    `/tasks/${taskId}`,
    updatePayload
  );
  return apiResponse.data;
};

export const deleteTaskService = async (taskId) => {
  const apiResponse = await apiClient.delete(
    `/tasks/${taskId}`
  );
  return apiResponse.data;
};