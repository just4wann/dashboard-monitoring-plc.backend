import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EventModule } from './events/events.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MQTT',
        transport: Transport.MQTT,
        options: {
          url: 'http://127.0.0.1',
          port: 1883
        }
      }
    ]),
    EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
