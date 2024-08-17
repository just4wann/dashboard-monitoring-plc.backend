import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule) 
  app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      url: 'http://localhost',
      port: 1883,
      username: '',
      password: ''
    }
  })
  app.startAllMicroservices();
  app.listen(8000);
}
bootstrap();
