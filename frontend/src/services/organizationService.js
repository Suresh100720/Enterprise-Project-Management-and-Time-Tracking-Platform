import apiClient from "../config/apiConfig";

export const getOrganizationsService = async () => {
  const apiResponse = await apiClient.get("/organizations");
  return apiResponse.data;
};

export const createOrganizationService = async (organizationPayload) => {
  const apiResponse = await apiClient.post(
    "/organizations",
    organizationPayload
  );
  return apiResponse.data;
};

export const updateOrganizationService = async (
  organizationId,
  updatePayload
) => {
  const apiResponse = await apiClient.put(
    `/organizations/${organizationId}`,
    updatePayload
  );
  return apiResponse.data;
};

export const getTeamsService = async () => {
  const apiResponse = await apiClient.get("/teams");
  return apiResponse.data;
};

export const getUsersService = async () => {
  const apiResponse = await apiClient.get("/users");
  return apiResponse.data;
};