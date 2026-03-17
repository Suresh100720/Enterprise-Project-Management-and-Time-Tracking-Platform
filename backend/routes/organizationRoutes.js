import express from "express";
import {
  createOrganization,
  getOrganizations
} from "../controllers/organizationController.js";

const router = express.Router();

router.post("/", createOrganization);
router.get("/", getOrganizations);

export default router;