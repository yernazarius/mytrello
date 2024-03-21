import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(cookieParser());

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) {
        callback(null, true);
      } else {
        callback(null, origin);
      }
    },
    credentials: true,
    exposedHeaders: 'set-cookie',
  });

  await app.listen(3000);
}

bootstrap();
