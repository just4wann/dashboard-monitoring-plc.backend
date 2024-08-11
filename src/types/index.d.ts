interface TimeStamp {
    timestamp: string;
}

export interface ProductionInfo extends TimeStamp {
    type: string;
    ok: number;
    ng: number;
}

export interface MachineInfo extends TimeStamp {
    status: string;
    mode: string;
    runningTime: {
        hour: string;
        minute: string;
    };
    downTime: {
        hour: string;
        minute: string;
    };
}

export interface TroubleMachine extends TimeStamp {
    name: string;
}

export interface EfficiencyDto extends TimeStamp {
    value: number;
}

export interface PressureDto extends Timestamp {
    vacuumPressure: number;
    airPressure: number;
}

export interface TemperatureDto extends TimeStamp {
    ovenTemp: number;
    roomTemp: number;
    heaterTemp: number;
}