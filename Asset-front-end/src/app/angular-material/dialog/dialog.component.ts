import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { MyDialogComponentComponent } from '../my-dialog-component/my-dialog-component.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  result=""

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  openDialog(){
    let dialogRef=this.dialog.open(MyDialogComponentComponent,{
      width:'600px',
      data:'This text is from a different component'

    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog closed: ${result}`);
      this.result=result;
    })
  }

}
