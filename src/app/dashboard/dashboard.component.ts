import { Component, OnInit } from '@angular/core';
import { CarService } from '../Services/car.service';
import { DriverData } from '../Model/DriverData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  driverData: DriverData;
  title:string = "Dashboard";

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.GetMilesById(200).subscribe(data=>this.driverData=data[0]);
  }

}
