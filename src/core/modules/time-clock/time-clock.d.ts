type TTimeClockState = {}

type TTimeRecord = { hour: number; minutes: number, date: number }

type TEmployeeTimeRecord = { id: string; start: TTimeRecord; end: TTimeRecord; isCompleted: boolean; }

type TEmployeeTimeRecords = TEmployeeTimeRecord[]

type TClockPart = 'hour' | 'minutes'

type TClockPhase = 'start' | 'end'

type TUpdateRecordArg = {
    employeeId: string;
    recordId: string;
    value: number;
    clockPart: TClockPart;
    phase: TClockPhase;
}
