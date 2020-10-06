import { Component, OnInit } from '@angular/core';
import { CommunityService } from './community.service';
import { Icommunity } from './icommunity';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
 comments:Icommunity[]
 errorMessege
  constructor(private _communityService:CommunityService) { }

  ngOnInit(): void {
    this._communityService.getComment().subscribe({next:data=>this.comments=data,error:err=>this.errorMessege=<any>err});
  }

}
