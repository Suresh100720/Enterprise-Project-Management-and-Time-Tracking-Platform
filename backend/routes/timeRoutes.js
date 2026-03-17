import express from "express";
import {
  logTime,
  getTimeEntries
} from "../controllers/timeTrackingController.js";

const router = express.Router();

router.post("/", logTime);
router.get("/", getTimeEntries);

export default router;