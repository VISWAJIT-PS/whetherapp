import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationDataService {
  _regData=new BehaviorSubject<any>({adressLineOne: "" ,adressLineTwo: "", age: "",block: "",country :  "", district : "", dob : "", firstName :  "",  gende  :  "",  img :  ""  ,lastName: " ",mailid: "",mobleNo: "",pincode: "",state: ""});
myData$=this._regData.asObservable();

  constructor() {}
  

}
