import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap';
import { defineLocale, nlLocale } from 'ngx-bootstrap/chronos';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


registerLocaleData(localeNl);
defineLocale('nl', nlLocale);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        BsDatepickerModule.forRoot(),
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'nl',
        },
        {
            provide: BsDatepickerConfig,
            useValue: {
                dateInputFormat: 'DD-MM-YYYY',
                containerClass: 'theme-default',
                locale: 'nl',
            },
        },
    ],
    exports: [
        BsDatepickerModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
