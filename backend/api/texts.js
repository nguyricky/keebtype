import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res
    .json({ message: "The route for generate text from story and phrase - use /texts/generate" })
    .status(200);
});



export default router;