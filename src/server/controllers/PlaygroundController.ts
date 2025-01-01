import { Controller, Post, Body, Get } from '@nestjs/common';
import { PlaygroundService } from '../services/PlaygroundService';
import { Playground } from '../entities/Playground';

@Controller('api/playground')
export class PlaygroundController {
  constructor(private readonly playgroundService: PlaygroundService) { }

  @Post()
  async create(@Body() body: { title: string; location: string }): Promise<Playground> {
    const { title, location } = body;
    return this.playgroundService.createPlayground(title, location);
  }

  @Get()
  async getAllPlaygrounds(): Promise<string> {
    return await this.playgroundService.getAllPlaygrounds()
  }
}