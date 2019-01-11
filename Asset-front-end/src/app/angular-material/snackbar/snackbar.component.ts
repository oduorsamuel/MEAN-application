import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(public snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackbar(){
  this.snackbar.open("This is snackbar", "OK");
  }

}
