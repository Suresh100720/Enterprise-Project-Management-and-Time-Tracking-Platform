import Task from "../models/Task.js";

export const createTask = async (requestObject, responseObject) => {

  const taskRecord = await Task.create(requestObject.body);

  responseObject.json(taskRecord);
};

export const getTasks = async (requestObject, responseObject) => {

  const tasksList = await Task.find();

  responseObject.json(tasksList);
};