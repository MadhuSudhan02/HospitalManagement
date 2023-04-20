import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogApointmentComponent } from '../dialog-apointment/dialog-apointment.component';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  doctor : any
  user : any
  Pname : any
  constructor(private dialog : MatDialog , private userService : UserServiceService){}

  ngOnInit(): void {
    this.getDoctor();
  }
  
  openDialog(details : any ){
    this.dialog.open(DialogApointmentComponent , {
      data : details
    });
  
  }

 

  getDoctor(){
    this.userService.doctorGetService().subscribe((response : any) => {
      this.doctor = response ;
    })
  }

 

}

