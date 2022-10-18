import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavigationDataService } from '../service/navigation-data.service';

@Component({
  selector: 'app-wether-card',
  templateUrl: './wether-card.component.html',
  styleUrls: ['./wether-card.component.css']
})
export class WetherCardComponent implements OnInit {
  wetherdataList: any;
  tempc: any;
  tempf: any;
  place: any;
  wetherText: any;
  wetherIcon: any;
  wind: any;
  humidity: any;
  time: any;
  pipe = new DatePipe('en-US');
  morEvn: any;
  morNitImg=""
  regformdata:any
  loction: any;
  fullname: any;
  newtime: any;



  constructor(
    private http:HttpClient,
    public navigation:NavigationDataService,
    ) { }

  ngOnInit(): void {
    this.getWetherData();
   

  }
   
  getWetherData(){
    this.navigation.myData$.subscribe(data=>{
      this.regformdata=data
    })
    this.fullname=this.regformdata.firstName+" "+this.regformdata.lastName
    this.loction=this.regformdata.block
    this.http.get('http://api.weatherapi.com/v1/current.json?key=627491ba2c7d439a9b9200634221810&q=' +this.loction+'&aqi=no').subscribe((data:any)=>{
      console.log(data)
      this.wetherdataList=data
      this.tempc=this.wetherdataList.current.temp_c
      this.tempf=this.wetherdataList.current.temp_f
      this.wind=this.wetherdataList.current.wind_kph
      this.humidity=this.wetherdataList.current.humidity
      this.wetherText=this.wetherdataList.current.condition.text
      this.wetherIcon=this.wetherdataList.current.condition.icon
      this.place=this.wetherdataList.location.name
      this.time=this.wetherdataList.location.localtime
      this.newtime=this.pipe.transform(this.time,'h:mm a')
      this.morEvn=this.wetherdataList.current.is_day
      console.log(this.morEvn)
      if(this.morEvn==1){
        this.morNitImg="../assets/hot.png"
      }
      else {
        this.morNitImg="../assets/cold.jpg"
      }

    });
  }

}
