import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  child :boolean =false
  recievedMsg : any

  @ViewChild(ChildComponent) childMsg: any ;

  constructor(){
    console.log("the constructor of the parent")
  }
  ngOnInit(): void {
    console.log("the oninit of the parent")
  }
toggleChild() {
this.child = !this.child
}

  // ngAfterViewInit(): void {
  //   this.recievedMsg = this.childMsg.msg
  // }



}
