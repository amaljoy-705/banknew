import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {

  sdata='Welcome to Federal Bank'

  constructor() { }

  smethoid(){
    // alert:("Service methoid")
    console.log("service");

  }
}
  