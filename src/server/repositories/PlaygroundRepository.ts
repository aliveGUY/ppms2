import { Repository } from "typeorm";
import { Playground } from "../entities/Playground";

interface IPlaygroundRepository {
  createPlayground(title: string, location: string): Promise<Playground>
}

export class PlaygroundRepository  extends Repository<Playground> implements IPlaygroundRepository {
  public async createPlayground(title: string, location: string): Promise<Playground> {
    const playground = new Playground();
    playground.title = title;
    playground.location = location;
    return await this.save(playground);
  }
}
