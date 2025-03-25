import { Injectable } from "@angular/core";
import { Driver } from "../models/driver";
import { SnapType } from "../models/driver-type.type";

@Injectable ({
    providedIn: 'root'
})

export class DriversService {
    private drivers: Driver[] = [
                new Driver (
                'Premier site',
                'La première de mes créations',
                'https://wallpaperaccess.com/full/1393718.jpg',
                new Date(),
                14
            ),
    
            new Driver (
                'Second site',
                'Entraînement très simple sur html/css',
                'https://wallpaperaccess.com/full/1393740.jpg',
                new Date(),
                2
            ).withLocation('Github'),
            new Driver (
                'Harmonistere',
                'Mon chef d\'oeuvre',
                'https://cdn.mos.cms.futurecdn.net/YdFsXZgsagfMECEWk7qRTQ.jpg',
                new Date(),
                56
            )
        ];

        getDrivers(): Driver[] {
            return [...this.drivers];
        }

        getDriverById(driverId: string): Driver {
            const foundDriver : Driver | undefined = this.drivers.find(driver => driver.id === driverId);
            if (!foundDriver) {
                throw new Error ('Driver not found');
            }
                return foundDriver;
        }

        driverById(driverId: string, snapType : SnapType): void {
            const driver : Driver | undefined = this.getDriverById(driverId);
            driver.snap(snapType);
        }
}