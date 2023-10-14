import { Component } from '@angular/core'
import { LoadingService } from './shared/services/loading.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'teste-srm'

    showLoader = false

    constructor(private loadingService: LoadingService) {
        this.loadingService.showLoading$.subscribe((value) => {
            this.showLoader = value
        })
    }
}
