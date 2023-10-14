import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    private showLoadingStore: BehaviorSubject<boolean> = new BehaviorSubject(false)
    showLoading$: Observable<boolean> = this.showLoadingStore.asObservable()

    showLoading(): void {
        this.showLoadingStore.next(true)
    }

    hideLoading(): void {
        this.showLoadingStore.next(false)
    }
}
