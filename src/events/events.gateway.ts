import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server } from 'socket.io'
import { EfficiencyDto, MachineInfo, PressureDto, ProductionInfo, TemperatureDto, TroubleMachine } from 'src/types';

@WebSocketGateway(1885, {
    cors: {
        origin: '*'
    }
})

export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() 
    server: Server

    handleConnection() {
        console.log('Client connected');
    }

    handleDisconnect() {
        console.log('Client Disconnect');
    }

    sendEfficiency(topic: string, value: EfficiencyDto) {
        return this.server.emit(topic, value);
    }

    sendTemperature(topic: string, value: TemperatureDto) {
        return this.server.emit(topic, value);
    }

    sendPressure(topic: string, value: PressureDto) {
        return this.server.emit(topic, value);
    }

    sendProduction(topic: string, value: ProductionInfo) {
        return this.server.emit(topic, value);
    }

    sendMachine(topic: string, value: MachineInfo) {
        return this.server.emit(topic, value);
    }

    sendTrouble(topic: string, value: TroubleMachine) {
        return this.server.emit(topic, value);
    }
}