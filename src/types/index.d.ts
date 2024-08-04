export interface ProductionInfo {
    type: string;
    ok: number;
    ng: number;
}

export interface MachineInfo {
    status: string;
    runningTime: string;
    downTime: string;
}

export interface TroubleMachine {
    name: string;
    timestamp: string;
}