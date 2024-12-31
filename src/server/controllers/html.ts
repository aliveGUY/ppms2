import type { Request, Response } from "express";
import { Router } from "express";

const router = Router();

export async function getHomePage(req: Request, res: Response) {
  res.render("pages/home", { title: "Home Page" });
}

export async function getAboutPage(req: Request, res: Response) {
  res.render("pages/home", { title: "Home Page" });
}

export async function get404Page(req: Request, res: Response) {
  res.status(404).send("Page not found.");
}

router
  .get("/", getHomePage)
  .get("/about", getAboutPage)
  .use(get404Page);

export default router;
