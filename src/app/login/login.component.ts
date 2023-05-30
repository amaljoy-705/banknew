import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankServiceService } from '../bank-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data="Happy banking with us"
  pd="password"
  stored:any
constructor(private rout:Router,private ds:BankServiceService) {}

  ngOnInit():void{
    this.stored=this.ds.sdata
    console.log(this.stored);
    this.ds.smethoid()


  }

login(a:any){
  console.log(a.value);

  alert('login clicked')
  this.rout.navigateByUrl('home')
}
acnoChange(event:any){
  console.log(event.target.value);

}
}
