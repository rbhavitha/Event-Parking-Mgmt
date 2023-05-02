import { Component, OnInit,Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent implements OnInit {
  mainLink:string;
  origin:string;
  destination:string;
  origin1: string='';
  destination1:string='';
  getValue(val:string, val2:string )
  {
    console.warn(val)
  this.origin1 = val
  this.destination1=val2
  this.destination = "35 Timberridge Drive"
  this.mainLink = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyCfMOZIe13l8FeP7imegG8-k7b0pW53tCE&origin=${this.origin1}
                  &destination=${this.destination1}&avoid=tolls|highways`
  //this.message = this.mainLink
  }
  
  constructor(private sanitizer: DomSanitizer) {
          
    this.origin = "35 Timberlake Drive"
    this.destination = "350 bee rd"
    this.mainLink = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyCfMOZIe13l8FeP7imegG8-k7b0pW53tCE&origin=${this.origin}&destination=${this.destination}&avoid=tolls|highways`
   }

  ngOnInit(): void {
  }
  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.mainLink
    );
  }


}
