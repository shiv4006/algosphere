import express from "express"
import { checkUser, logout, signin, signup } from "../controller/auth.controller.js"

const router = express.Router();

router.get("/", checkUser);
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);

export default router;