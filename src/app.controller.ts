import { Controller, UseInterceptors} from '@nestjs/common';
import { EventsGateway } from './events/events.gateway';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices'
import { EfficiencyDto, MachineInfo, ProductionInfo, TemperatureDto, PressureDto, TroubleMachine } from './types';
import { TimeInterceptors } from './timestamp/timestamp.interceptor';

@UseInterceptors(TimeInterceptors)
@Controller()
export class AppController {
  constructor(private websocketGateway: EventsGateway) {}

  @MessagePattern('efficiencies')
  getEfficiencies(@Payload() value: EfficiencyDto, @Ctx() context: MqttContext) {
    return this.websocketGateway.sendEfficiency(context.getTopic(), value);
  }

  @MessagePattern('temperatures')
  getTemperatures(@Payload() value: TemperatureDto, @Ctx() context: MqttContext) {
    return this.websocketGateway.sendTemperature(context.getTopic(), value);
  }

  @MessagePattern('pressures')
  getPressure(@Payload() value: PressureDto, @Ctx() context: MqttContext) {
    return this.websocketGateway.sendPressure(context.getTopic(), value);
  }

  @MessagePattern('productions')
  getProduction(@Payload() value: ProductionInfo, @Ctx() context: MqttContext) {
    return this.websocketGateway.sendProduction(context.getTopic(), value);
  }

  @MessagePattern('machines')
  getMachines(@Payload() value: MachineInfo, @Ctx() context: MqttContext) {
    return this.websocketGateway.sendMachine(context.getTopic(), value)
  }

  @MessagePattern('troubles')
  getTrouble(@Payload() value: TroubleMachine, @Ctx() context: MqttContext) {
    return this.websocketGateway.sendTrouble(context.getTopic(), value);
  }
  
}
