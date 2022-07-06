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

  //static file public
  app.useStaticAssets(join(__dirname, '..', 'public'), {prefix: '/public'});
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));

  //override method
  const methodOverride = require('method-override');
  app.use(methodOverride('_method'));

  //layouts
  app.engine(
    'hbs',
    hbs.engine({
      extname: 'hbs',
      defaultLayout: 'main',
      layoutsDir: join(__dirname, '..', 'src/views', 'layouts'),
      partialsDir: join(__dirname, '..', 'src/views', 'partials'),
      helpers: { printName,
      eq:equal,
      sum: (a, b) => a + b
      },
    }),
  );
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
