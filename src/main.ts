import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'express-handlebars';
import { printName } from './hbs/helper';
import { equal } from 'assert';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.engine(
    'hbs',
    hbs.engine({
      extname: 'hbs',
      defaultLayout: 'main',
      layoutsDir: join(__dirname, '..', 'src/views', 'layouts'),
      partialsDir: join(__dirname, '..', 'src/views', 'partials'),
      helpers: { printName,
      eq:equal
      },
    }),
  );
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();