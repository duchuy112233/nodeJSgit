import { Router } from "express";

import booksRouter from "./books";
import authRouter from "./auth";


const router = Router();

router.get("/", (req, res) => {
  res.send("Home");
});

router.use("/auth", authRouter);
router.use("/books", booksRouter);



export default router;
