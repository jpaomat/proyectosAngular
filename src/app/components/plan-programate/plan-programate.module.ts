import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanProgramateRoutingModule } from './plan-programate-routing.module';
import { RegisterComponent } from './register/register.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [ RegisterComponent, HomeComponent],
  imports: [
    CommonModule,
    PlanProgramateRoutingModule,
    NgbModule, 
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlanProgramateModule { }
