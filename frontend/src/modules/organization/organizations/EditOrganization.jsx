import React from "react";
import { message } from "antd";

import OrganizationForm from "../../../components/forms/OrganizationForm";
import apiClient from "../../../config/apiConfig";

function EditOrganization({ organizationId }) {

  const handleUpdate = async (updateData) => {

    try {

      await apiClient.put(
        `/organizations/${organizationId}`,
        updateData
      );

      message.success("Organization updated");

    } catch (errorObject) {
      message.error("Update failed");
    }
  };

  return (
    <div>

      <h2>Edit Organization</h2>

      <OrganizationForm onSubmit={handleUpdate} />

    </div>
  );
}

export default EditOrganization;