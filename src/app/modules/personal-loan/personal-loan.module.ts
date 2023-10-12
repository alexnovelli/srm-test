import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalLoanRoutingModule } from './personal-loan-routing.module';
import { PersonalLoanComponent } from './personal-loan.component';


@NgModule({
  declarations: [
    PersonalLoanComponent
  ],
  imports: [
    CommonModule,
    PersonalLoanRoutingModule
  ]
})
export class PersonalLoanModule { }
