import { Component, OnInit } from '@angular/core';
import {AssetService} from '../../asset.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(private assetServise: AssetService, private fb: FormBuilder, private router:Router) { 
    this.createForm= this.fb.group({
      deviceName:['',Validators.required],
      responsible:'',
      description:'',
      department:'',
    });
  }
addAsset(deviceName,responsible,description,department){
  this.assetServise.addAsset(deviceName,responsible,description,department).subscribe(()=>{
     this.router.navigate(['/list']);
  });

}
  ngOnInit() {
  }

}
