import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnDestroy {

count : number = 0 ;


  msg : any = 'message from the child' ;
  constructor(){
    console.log("the constructor of the child")
  }
  ngOnInit(): void {
    console.log("the oninit of the child")

   
  }
  ngOnDestroy(): void {
    console.log("the destroy of the child")
   
  }
  
  
}

