import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  location1Report;
  location1;

  location2Report;
  location2;

  location3Report;
  location3;

  location4Report;
  location4;

  location5Report;
  location5;

  location6Report;
  location6;

  location7Report;
  location7;

  location8Report;
  location8;

  location9Report;
  location9;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Simple GET request with response type <any>
    // this.http.get<any>('http://api.openweathermap.org/data/2.5/weather?q='+this.location1+'&appid=f62ee3c16258619e3299c577cb68fb28&units=Metric').subscribe(data => {
    //   console.log( data );
    //   this.location1Report = data;
    // });
    
  }
  getWeatherReport(location, type){

    console.log( location )
    
    this.http.get<any>('http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=f62ee3c16258619e3299c577cb68fb28&units=Metric').subscribe(data => {
      console.log( data );
      console.log( data.status );

      switch(type){
        case 1:
          this.location1Report = data;
          break;
        case 2:
          this.location2Report = data;
          break;
        case 3:
          this.location3Report = data;
          break;
        case 4:
          this.location4Report = data;
          break;
        case 5:
          this.location5Report = data;
          break;
        case 6:
          this.location6Report = data;
          break;
        case 7:
          this.location7Report = data;
          break;
        case 8:
          this.location8Report = data;
          break;
        case 9:
          this.location9Report = data;
          break;
      }

      
    }, (error) => {
      // Here you can handle errors
      console.log( 'error' )
    });
    
  }

}
