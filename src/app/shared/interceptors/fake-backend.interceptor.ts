import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'

import { PersonalLoanInput, PersonalLoanOutput } from '../../modules/personal-loan/models/personal-loan.interface'
import { LoadingService } from '../services/loading.service'

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    constructor(private loadingService: LoadingService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<PersonalLoanOutput>> {
        if (request.url.endsWith('api/calculate-loan') && request.method == 'POST') {
            this.loadingService.showLoading()
            const postedValue: PersonalLoanInput = request.body.value

            return new Observable((observer) => {
                setTimeout(() => {
                    observer.next(
                        new HttpResponse<PersonalLoanOutput>({
                            body: this.calculateLoan(postedValue),
                            status: 200,
                        })
                    )
                    observer.complete()

                    this.loadingService.hideLoading()
                }, 1500)
            })
        }

        return next.handle(request)
    }

    calculateLoan(value: PersonalLoanInput): PersonalLoanOutput {
        const interestRate = 0.05
        const installment = value.loanValue / value.installments
        const installmentFee = value.loanValue * interestRate
        const installmentPlusFee = installment + installmentFee

        return {
            installments: value.installments,
            installmentsValue: installmentPlusFee,
            finalLoanValue: installmentPlusFee * value.installments,
        }
    }
}
