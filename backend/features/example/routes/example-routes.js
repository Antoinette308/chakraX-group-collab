
import { Router } from "express";
import { welcomeMessage } from "../controllers/example-controller";

const router = Router();

router.get('/', welcomeMessage);

// CRUD routes

export default router;