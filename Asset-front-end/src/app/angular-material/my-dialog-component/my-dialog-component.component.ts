import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-dialog-component',
  templateUrl: './my-dialog-component.component.html',
  styleUrls: ['./my-dialog-component.component.css']
})
export class MyDialogComponentComponent implements OnInit {

  constructor(private route:Router, public thisDialogRef:MatDialogRef<MyDialogComponentComponent>, @Inject(MAT_DIALOG_DATA) public data:String) { }

  ngOnInit() {
  }
onClose(){
  this.thisDialogRef.close('The dialog has been closed');
}
onCancel(){
  this.thisDialogRef.close('The dialog has been canceled');
}
}
