import express from "express";
import { allocateResource } from "../controllers/resourceController.js";

const router = express.Router();

router.post("/allocate", allocateResource);

export default router;