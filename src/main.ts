import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule) 
  app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      url: 'http://broker.beastnice.com',
      port: 1883,
      username: 'beastnicemqtt',
      password: 'mqttbroker'
    }
  })
  app.startAllMicroservices();
  app.listen(8000);
}
bootstrap();
