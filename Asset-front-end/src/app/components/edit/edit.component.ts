import { Component, OnInit } from '@angular/core';
import {AssetService} from '../../asset.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Asset} from '../../asset.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updateForm:FormGroup;
  Id:String;
  asset: any={};

  constructor(private assetServise: AssetService, private router:Router, private route:ActivatedRoute, private snackbar:MatSnackBar, private fb:FormBuilder) {
   this.createForm();
   }

   createForm(){
    this.updateForm= this.fb.group({
      deviceName:['',Validators.required],
      responsible:'',
      description:'',
      department:'',
      status:''
    });

   }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.Id=params.id;
      this.assetServise.getAssetById(this.Id).subscribe(res=>{
      this.asset=res;
      this.updateForm.get('deviceName').setValue(this.asset.deviceName);
      this.updateForm.get('responsible').setValue(this.asset.responsible);
      this.updateForm.get('description').setValue(this.asset.description);
      this.updateForm.get('department').setValue(this.asset.department);
      this.updateForm.get('status').setValue(this.asset.status);
      });
    });
  }
      //eventHandler
      updateAsset(deviceName,responsible,description,department,status){
        this.assetServise.updateAsset(this.Id, deviceName,responsible,description,department,status).subscribe(()=>{
          this.snackbar.open('Asset Updated Succesfully','Ok',{
            duration:3000
          });
        });
      }

}
