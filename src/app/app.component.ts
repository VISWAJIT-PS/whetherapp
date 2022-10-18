import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { routinComponent } from './app-routing.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'efeedTask';
  // maxDate= new Date();
  //  public dispAgeVal!: string;
  //  public Dobdate:Date | undefined;
  // state: any;
   
  constructor(
    // private formBuilder:FormBuilder
    
    ){
    
    }
 


  // profilrForm = this.formBuilder.group({
  //   firstName:['',Validators.required],
  //   lastName:[''],
  //   age:['',Validators.required],
  //   dob:['',Validators.required],
  //   adressLineOne:['',Validators.required],
  //   adressLineTwo:[''],
  //   mobleNo:['',Validators.required],
  //   gender:['',Validators.required],
  //   img:['',Validators.required]

    
  // })
  // clickDob(ageVal:String){

    

  //   let dobArr=[]
  //   dobArr=ageVal.split('/')
   
  //   // var nowdate=Date.now()
  //   let strDate=dobArr[2]+"-"+dobArr[0]+"-"+dobArr[1]
  //   let ConvertedDob=Date.parse(strDate)
  //   let convertedNowDate=Date.now();
  //   // this.Dobdate=Date.parse(newdate)
  //   // console.log(convertedNowDate,ConvertedDob)
  //   let valueAge=(convertedNowDate-ConvertedDob)/ (1000 * 3600 * 365 * 24);

  //   dobArr=valueAge.toPrecision().split(".")
  //   let month=parseInt("."+dobArr[1])/10*12
  //   if(dobArr[0]!="NaN"){
  //   let years=dobArr[0]+ " years "

  //   this.dispAgeVal=years
    

  //   }
  //   // console.log(ageVal,month)
    


 
    
  // }

  clickPincode(){
       


  }
  
  // saveFrom(){
  //   console.log(this.profilrForm.value)
    
  // }


  // getPostelData(){
  //   this.httpClinet.get('https://api.postalpincode.in/pincode/678613').subscribe((data:any)=>{
  //     this.dataList=data;
  //   });
  // }

  
  
}
