import { Component, OnInit, ViewChild } from '@angular/core';
import { CarService } from '../Services/car.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  @ViewChild("fileInput") fileInput;
  
  addFile(): void {
      let fi = this.fileInput.nativeElement;
      if (fi.files && fi.files[0]) {
          let fileToUpload = fi.files[0];
          this.carService
              .UploadImage(fileToUpload)
              .subscribe(res => {
                  console.log(res);
              });
      }
  }
}
