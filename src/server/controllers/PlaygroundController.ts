import { Request, Response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { PlaygroundRepository } from "../repositories/PlaygroundRepository";

async function createplayground(req: Request, res: Response): Promise<any> {
  const { title, location } = req.body;

  const playgroundRepository = getCustomRepository(PlaygroundRepository);
  const playground = await playgroundRepository.createPlayground(title, location);

  return res.json(playground);
}

const router = Router();

router.post("/api/playground", createplayground);

export default router;
