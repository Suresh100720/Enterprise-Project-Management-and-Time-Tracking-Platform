import User from "../models/User.js";

export const getUsers = async (requestObject, responseObject) => {

  const usersList = await User.find();

  responseObject.json(usersList);
};

export const createUser = async (requestObject, responseObject) => {

  const newUserRecord = await User.create(requestObject.body);

  responseObject.json(newUserRecord);
};