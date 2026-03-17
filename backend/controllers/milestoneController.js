import Milestone from "../models/Milestone.js";

export const createMilestone = async (requestObject, responseObject) => {

  const milestoneRecord = await Milestone.create(requestObject.body);

  responseObject.json(milestoneRecord);
};