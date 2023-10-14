import { NgModule, LOCALE_ID } from '@angular/core'
import { registerLocaleData } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import localePt from '@angular/common/locales/pt'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FakeBackendInterceptor } from './shared/interceptors/fake-backend.interceptor'

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { LoaderComponent } from './shared/components/loader/loader.component'

registerLocaleData(localePt)

@NgModule({
    declarations: [AppComponent, LoaderComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, MatProgressSpinnerModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true },
        { provide: LOCALE_ID, useValue: 'pt-BR' },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
