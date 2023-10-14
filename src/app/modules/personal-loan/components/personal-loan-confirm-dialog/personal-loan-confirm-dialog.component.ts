import { Component, Inject } from '@angular/core'

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { DialogData } from '../../personal-loan.component'

@Component({
    selector: 'app-personal-loan-confirm-dialog',
    templateUrl: './personal-loan-confirm-dialog.component.html',
    styleUrls: ['./personal-loan-confirm-dialog.component.scss'],
})
export class PersonalLoanConfirmDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<PersonalLoanConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    closeDialog(): void {
        this.dialogRef.close()
    }
}
