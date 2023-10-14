export interface PersonalLoanInput {
    name: string
    email: string
    loanValue: number
    installments: number
}

export interface PersonalLoanOutput {
    installments: number
    installmentsValue: number
    finalLoanValue: number
}
