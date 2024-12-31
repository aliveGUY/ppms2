import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.render("pages/home", { title: "Home Page" });
});

router.get("/about", (req: Request, res: Response) => {
  res.render("pages/about", { title: "About Page" });
});

router.use((req: Request, res: Response) => {
  res.status(404).send("Page not found.");
});

export default router;
