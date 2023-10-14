import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatSliderModule } from '@angular/material/slider'
import { MatDividerModule } from '@angular/material/divider'

import { PersonalLoanComponent } from './personal-loan.component'
import { PersonalLoanRoutingModule } from './personal-loan-routing.module'
import { PersonalLoanService } from './services/personal-loan.service'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
    declarations: [PersonalLoanComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatSliderModule,
        MatDividerModule,
        PersonalLoanRoutingModule,
        SharedModule,
    ],
    providers: [PersonalLoanService],
})
export class PersonalLoanModule {}
