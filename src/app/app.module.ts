import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { WeightEntriesComponent } from './weight/weight-entries.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommunityComponent } from './community/community.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightEntriesComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:WeightEntriesComponent},
      {path:'community',component:CommunityComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
