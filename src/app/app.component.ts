import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'datepicker512-working';
    testDate: Date = new Date('2019-08-26T22:00:00.000Z');
    dateString: string = '2019-08-26T22:00:00.000Z';
    dateToString: string = this.testDate.toString();
    dateStringToLocale: string = this.testDate.toLocaleString();

    testControl: FormControl = new FormControl(this.testDate);


}
