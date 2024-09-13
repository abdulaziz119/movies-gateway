import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as bodyParser from 'body-parser';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_PORT } from '@env';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.disable('etag');
  app.disable('x-powered-by');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const options = new DocumentBuilder()
    .setTitle('MOVIES GATEWAY V2')
    .setVersion('2.0')
    .addBearerAuth()
    .build();

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '2',
  });

  app.setGlobalPrefix('gtw');
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('gtw/v2/swagger', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  await app.listen(APP_PORT);
}

bootstrap().then(() =>
  console.log(`http://0.0.0.0:${APP_PORT}/gtw/v2/swagger`),
);
