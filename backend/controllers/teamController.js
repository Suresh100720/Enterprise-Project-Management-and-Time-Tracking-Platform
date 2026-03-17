import Team from "../models/Team.js";

export const createTeam = async (requestObject, responseObject) => {

  const teamRecord = await Team.create(requestObject.body);

  responseObject.json(teamRecord);
};

export const getTeams = async (requestObject, responseObject) => {

  const teamsList = await Team.find().populate("members");

  responseObject.json(teamsList);
};