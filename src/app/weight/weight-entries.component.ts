import { Component, OnInit } from '@angular/core';
import { Iweight } from './iweight';
import { WeightService } from './weight.service';

@Component({
  selector: 'app-weight-entries',
  templateUrl: './weight-entries.component.html',
  styleUrls: ['./weight-entries.component.css']
})
export class WeightEntriesComponent implements OnInit {
pageTitle:string="Your Weight Entries"
entries:Iweight[]
errorMessege
  constructor(private _weightService:WeightService) {

   }

  ngOnInit(): void {
    this._weightService.getWeight().subscribe({next:data=>this.entries=data,error:err=>this.errorMessege=<any>err});
    //this.entries=this._weightService.getWeight()
  }

}
