import { NestFactory } from '@nestjs/core';
import { AppModule } from './data-source';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Ensure that static files are being served from the "static" directory
  app.useStaticAssets(path.join(__dirname, '..', 'static'), {
    prefix: '/static', // All static assets will be prefixed with "/static"
  });

  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  await app.listen(3000);
  console.log('Server is running on http://localhost:3000');
}

bootstrap();
