import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/asset.service';
import {Router} from '@angular/router';
import {Asset} from '../../asset.model';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
assets: Asset[];
displayedColumn= ['_id','deviceName','responsible','department','status','action']

  constructor(private assetService: AssetService , private router:Router) { }

  ngOnInit() {
   this.fetchAssets();
  }

  fetchAssets(){
    this.assetService
    .getAsset()
    .subscribe((data:Asset[])=>{
      this.assets=data;
      console.log('data requested....');
      console.log(this.assets);
    })
  }
  editAsset(id){
   this.router.navigate([`/edit/${id}`]);
  }
  deleteAsset(id){
   this.assetService.deleteAsset(id).subscribe(()=>{
     this.fetchAssets();
   })
  }

}
