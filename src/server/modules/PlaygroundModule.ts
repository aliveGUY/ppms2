import { Module } from '@nestjs/common';
import { PlaygroundService } from '../services/PlaygroundService';
import { PlaygroundController } from '../controllers/PlaygroundController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playground } from '../entities/Playground';
import { HTMLController } from '../controllers/HTMLController';

@Module({
  imports: [TypeOrmModule.forFeature([Playground])],
  controllers: [PlaygroundController, HTMLController],
  providers: [PlaygroundService],
})
export class PlaygroundModule { }
