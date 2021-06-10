import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';

console.log('当前环境', process.env.NODE_ENV)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //允许跨域请求
  app.enableCors();
  //全局注册错误的过滤器（错误异常）
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(4000);
}
bootstrap();
