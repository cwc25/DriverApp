export class DriverData
{
    Id:string;
    VehicleId:string;
    CreatedDate: Date;
    Report: DriverReport;
    ParkingSlots: ParkingSlot[];
}

export class DriverReport
{
    TotalMiles: number;
    AverageMiles: number;
}

export class ParkingSlot
{
    X:number;
    Y:number;
}