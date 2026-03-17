import Organization from "../models/Organization.js";

export const createOrganization = async (requestObject, responseObject) => {

  try {

    const newOrganization = await Organization.create(
      requestObject.body
    );

    responseObject.json(newOrganization);

  } catch (errorObject) {

    responseObject.status(500).json({
      message: "Organization creation failed"
    });

  }
};

export const getOrganizations = async (requestObject, responseObject) => {

  const organizationsList = await Organization.find();

  responseObject.json(organizationsList);
};