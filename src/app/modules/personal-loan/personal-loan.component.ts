import { Component, OnInit } from '@angular/core'
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms'

import { collapseOnLeaveAnimation, expandOnEnterAnimation } from 'angular-animations'
import { MatDialog } from '@angular/material/dialog'

import { emailPattern } from '../../shared/validators/patterns'
import { PersonalLoanService } from './services/personal-loan.service'
import { PersonalLoanInput, PersonalLoanOutput } from './models/personal-loan.interface'
import { PersonalLoanConfirmDialogComponent } from './components/personal-loan-confirm-dialog/personal-loan-confirm-dialog.component'

export interface DialogData {
    personalLoanData: PersonalLoanOutput
    selectedLoanValue: number
}

@Component({
    templateUrl: './personal-loan.component.html',
    styleUrls: ['./personal-loan.component.scss'],
    animations: [expandOnEnterAnimation(), collapseOnLeaveAnimation()],
})
export class PersonalLoanComponent implements OnInit {
    form!: UntypedFormGroup
    installmentsList: number[] = []
    personalLoanData!: PersonalLoanOutput
    simulationStep = true
    finalLoanData!: DialogData

    constructor(
        private personalLoanService: PersonalLoanService,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.createForm()
        this.setInstallmentsList()
    }

    getFormControl(field: string) {
        return this.form.get(field) as FormControl
    }

    submitPersonalLoanRequest() {
        if (this.form.valid) {
            this.personalLoanData = null as unknown as PersonalLoanOutput

            const payload: PersonalLoanInput = this.form.value

            this.personalLoanService.calculatePersonalLoan(payload).subscribe((resp) => {
                this.personalLoanData = resp
            })
        }
    }

    confirmPersonalLoanRequest() {
        this.finalLoanData = {
            personalLoanData: this.personalLoanData,
            selectedLoanValue: this.form.get('loanValue')?.value,
        }

        const dialogRef = this.dialog.open(PersonalLoanConfirmDialogComponent, {
            data: this.finalLoanData,
            width: '700px',
        })

        dialogRef.afterClosed().subscribe((value) => {
            this.simulationStep = value
        })
    }

    private createForm() {
        this.form = new UntypedFormGroup({
            name: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.pattern(emailPattern)]),
            loanValue: new FormControl(100, Validators.required),
            installments: new FormControl(null, Validators.required),
        })
    }

    private setInstallmentsList() {
        for (let index = 1; index <= 12; index++) {
            this.installmentsList.push(index)
        }
    }
}
