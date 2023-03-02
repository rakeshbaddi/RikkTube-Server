import express from "express";
import { signin, signup, logout } from "../controllers/auth.js";
import { verifyToken } from '../verifyToken.js'

const router = express.Router();

router.post("/signup", signup)
router.post("/signin", signin)
router.post("/google", )
router.post("/logout", verifyToken, logout)

export default router;