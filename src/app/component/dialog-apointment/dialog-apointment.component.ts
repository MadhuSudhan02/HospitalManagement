import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-dialog-apointment',
  templateUrl: './dialog-apointment.component.html',
  styleUrls: ['./dialog-apointment.component.scss'],
})
export class DialogApointmentComponent implements OnInit {
  doc: any;
  user: any;
  Pname: any;
  Pemail: any;
  date :any
  appointment! : FormGroup ;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private userService : UserServiceService) {
    
    this.doc = this.data.Dname
    
    
  }
  ngOnInit(): void {
    console.log(this.data.Dname , "I am on the diagon")
    this.getUser() ;
  }

  getUser(){
    this.userService.loginGetService().subscribe((response : any) => {
      this.user = response
      console.log(this.user[0].Name);
      this.Pname = this.user[0].Name ;
      this.Pemail = this.user[0].email ;
      
      
    })
  }
  onSubmit(){
    let data = {
      Aname : this.appointment.value.Name ,
      Adoctor : this.appointment.value.Doctor ,
      Aemail : this.appointment.value.Email ,
      Adate : this.appointment.value.Date,
      Afrom : this.appointment.value.from,
      Ato : this.appointment.value.to,
      Anumber : this.appointment.value.Number,
      Ainjury : this.appointment.value.Injury
  }

  this.userService.signUpPost(data).subscribe((req : any)=> {
    console.log(req)
  })
  }

}
