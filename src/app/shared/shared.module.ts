import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoadingService } from './services/loading.service'

@NgModule({
    imports: [CommonModule],
    providers: [LoadingService],
})
export class SharedModule {}
