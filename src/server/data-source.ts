import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaygroundModule } from './modules/PlaygroundModule';
import { Playground } from './entities/Playground';

import dotenv from "dotenv";
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Playground],
      synchronize: true,
    }),
    PlaygroundModule,
  ],
})
export class AppModule { }
