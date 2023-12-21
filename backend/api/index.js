import { Router } from "express";

import textsRouter from "./texts.js";



const router = Router();

router.use("/texts", textsRouter);

export default router;