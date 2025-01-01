import type { Request, Response } from "express";
import { Router } from "express";


export async function getHomePage(req: Request, res: Response) {
  res.render("pages/home", { title: "Home Page" });
}

export async function getAboutPage(req: Request, res: Response) {
  res.render("pages/details", { title: "Details Page" });
}

export async function get404Page(req: Request, res: Response) {
  res.status(404).send("Page not found.");
}

const router = Router();

router
  .get("/", getHomePage)
  .get("/details", getAboutPage)
  .use(get404Page);

export default router;
