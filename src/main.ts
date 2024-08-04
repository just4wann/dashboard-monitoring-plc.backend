import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule)
  // app.connectMicroservice({
  //   transport: Transport.MQTT,
  //   options: {
  //     url: 'http://broker.hivemq.com',
  //     port: 1883    
  //   }
  // });
  // app.startAllMicroservices();
  // app.listen(3001);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.MQTT,
    options: {
      url: 'http://broker.hivemq.com',
      port: 1883
    }
  })
}
bootstrap();
