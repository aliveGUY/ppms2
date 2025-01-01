import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Playground } from '../entities/Playground';
import { generateTag } from '../utils/generateTag';

@Injectable()
export class PlaygroundService {
  constructor(
    @InjectRepository(Playground) private playgroundRepository: Repository<Playground>,
  ) { }

  async createPlayground(title: string, location: string): Promise<Playground> {
    const playground = new Playground();
    playground.title = title;
    playground.location = location;
    return await this.playgroundRepository.save(playground);
  }

  async getAllPlaygrounds(): Promise<string> {
    const playgrounds = await this.playgroundRepository.find();
    const result = playgrounds.map(item => generateTag('playground-list-item', item))
    return result.join()
  }
}
