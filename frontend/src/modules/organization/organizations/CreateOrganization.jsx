import React from "react";
import { message } from "antd";

import OrganizationForm from "../../../components/forms/OrganizationForm";
import apiClient from "../../../config/apiConfig";

function CreateOrganization() {

  const handleSubmit = async (organizationData) => {

    try {

      await apiClient.post(
        "/organizations",
        organizationData
      );

      message.success("Organization created");

    } catch (errorObject) {
      message.error("Failed to create organization");
    }
  };

  return (
    <div>
      <h2>Create Organization</h2>
      <OrganizationForm onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateOrganization;