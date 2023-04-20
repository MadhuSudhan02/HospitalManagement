import { Component, OnDestroy } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {


  series : ApexNonAxisChartSeries = [44, 55, 13, 43, 22] ;
  chartDetails : ApexChart = {
    type : 'donut' ,
    toolbar : {
      show : false
    }
  } ;
  chartlabel = ['apple', 'orange', 'grapes' , 'jackfruit', 'pineapple']
  chartTitle : ApexTitleSubtitle = {
    text : 'Fruit' ,
    align : 'center'
  }

  chartDataLabel : ApexDataLabels = {
    enabled : false
  }
// count : number = 0 ;


//   msg : any = 'message from the child' ;
//   constructor(){
//     console.log("the constructor of the child")
//   }
//   ngOnInit(): void {
//     console.log("the oninit of the child")

   
//   }
//   ngOnDestroy(): void {
//     console.log("the destroy of the child")
   
//   }
  
  
}

