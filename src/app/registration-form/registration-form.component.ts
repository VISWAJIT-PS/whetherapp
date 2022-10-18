import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink, TitleStrategy } from '@angular/router';
import { NavigationDataService } from '../service/navigation-data.service';
// import { WetherCardComponent } from '../wether-card/wether-card.component';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

 maxDate= new Date();
 public dispAgeVal!: string;
 public Dobdate:Date | undefined;
 state: any;
 dataList :any
 State: any;
 District: any;
 Country: any;
 postalCode: any;
  Block: any;
  profilrForm:any;
  dobArr: any;
  submitted=false;

  constructor( 
    private httpClinet:HttpClient,
    private formBuilder:FormBuilder,
    public navigation:NavigationDataService,
    private router:Router,
    ) { }
  
  

  ngOnInit(): void {
    

     this.profilrForm = this.formBuilder.group({
      firstName:['',[Validators.required,Validators.maxLength(15),Validators.minLength(3)]],
      lastName:['',Validators.nullValidator],
      dob:['',Validators.required],
      age:['',Validators.nullValidator],
      mobleNo:['',Validators.required],
      mailid:['',[Validators.required]],
      pincode:['',Validators.required],
      state:['',Validators.nullValidator],
      district:['',Validators.nullValidator],
      country:['',Validators.nullValidator],
      adressLineOne:['',[Validators.required,Validators.maxLength(45),Validators.minLength(10)]],
      adressLineTwo:['',Validators.nullValidator],
      gender:['',Validators.nullValidator],
      img:['',Validators.required],
      // block:[this.Block,Validators.required]
      
    })
  }

  clickDob(ageVal:String){

    

    var dobArr=[]
    dobArr=ageVal.split('/')
   
    // var nowdate=Date.now()
    let strDate=dobArr[2]+"-"+dobArr[0]+"-"+dobArr[1]
    let ConvertedDob=Date.parse(strDate)
    let convertedNowDate=Date.now();
    // this.Dobdate=Date.parse(newdate)
    // console.log(convertedNowDate,ConvertedDob)
    let valueAge=(convertedNowDate-ConvertedDob)/ (1000 * 3600 * 365 * 24);

    dobArr=valueAge.toPrecision().split(".")
    let month=parseInt("."+dobArr[1])/10*12
    if(dobArr[0]!="NaN"){
    let years=dobArr[0]+ " years "

    this.dispAgeVal=years
    

    }
    // console.log(ageVal,month)
   
  }

  getPostelData(postalCode: any){
    this.httpClinet.get('https://api.postalpincode.in/pincode/'+postalCode).subscribe((data:any)=>{
      this.dataList=data[0]?.PostOffice[0];
      this.State=this.dataList.State
      this.District=this.dataList.District
      this.Country=this.dataList.Country
      this.Block=this.dataList.Block

      // console.log(this.Block)
    });
  }

  saveFrom(){
    this.submitted=true
    if(this.profilrForm.valid){
      console.log(this.profilrForm.validator)
    this.profilrForm.value["block"]=this.Block
  
 
    this.navigation._regData.next(this.profilrForm.value)
    this.router.navigateByUrl(`/wether`);
    }
   
    
  }
}
