import TimeEntry from "../models/TimeEntry.js";

export const logTime = async (requestObject, responseObject) => {

  const entryRecord = await TimeEntry.create(requestObject.body);

  responseObject.json(entryRecord);
};

export const getTimeEntries = async (requestObject, responseObject) => {

  const entriesList = await TimeEntry.find();

  responseObject.json(entriesList);
};