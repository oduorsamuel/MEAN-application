import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/asset.service';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  chart= [];
  public temp;
  forecast:any[]

  constructor(private weather:AssetService) { }

  ngOnInit() {
    this.weather.getWeather().subscribe(res=>{
      console.log(res);
      var cord={
        temp:[],
        dates:[]
      }
      for (var i = 0; i < res.length; i++) {
        var obj=res[i]
        if(obj.purchased_assets){
          cord.temp.push(obj.purchased_assets);
        };
        if(obj.Date){
        cord.dates.push(obj.Date)
        }
        
      }
      console.log(cord);
      this.chart= new Chart ('canvas',{
      type:'bar',
      data:{
        labels:cord.dates,
        datasets:[
          {
          data:cord.temp,
          label:'No. of Assets',
          borderColor:'#3aaa9f',
          backgroundColor:'#ff4081',
          fill: false
        }
      ]
      },
      options:{
        lagend:{
          display:false
        },
        scales:{
          xAxes:[{
            display:true,
            scaleLabel:{
              display:true,
            labelString:'Date'
            }
          }],
          yAxes:[{
            display:true,
            scaleLabel:{
              display:true,
            labelString:'Purchased Assets'
            }
            
          }],
        }
      }
      })
    })
  }
}
