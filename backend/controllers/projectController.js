import Project from "../models/Project.js";

export const createProject = async (requestObject, responseObject) => {

  const projectRecord = await Project.create(requestObject.body);

  responseObject.json(projectRecord);
};

export const getProjects = async (requestObject, responseObject) => {

  const projectsList = await Project.find();

  responseObject.json(projectsList);
};