import { PersonalLoanInput, PersonalLoanOutput } from './../models/personal-loan.interface'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class PersonalLoanService {
    constructor(private httpClient: HttpClient) {}

    calculatePersonalLoan(value: PersonalLoanInput): Observable<PersonalLoanOutput> {
        return this.httpClient.post<PersonalLoanOutput>('api/calculate-loan', {
            value,
        })
    }
}
