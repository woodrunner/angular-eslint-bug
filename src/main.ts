import 'zone.js';
import {Component} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {of, map} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <h1>Hello from {{ name }}!</h1>
        <a target="_blank" href="https://angular.dev/overview">
            Learn more about Angular
        </a>
    `,
})
export class App {
    name = 'Angular';

    constructor() {
        of(1, 2, 3)
            .pipe(
                takeUntil(this as any),
                map(x => x * 2)
            )
            .subscribe({
                next: value => console.log('Mapped value:', value),
                complete: () => console.log('RxJS Completed'),
            });
    }
}

bootstrapApplication(App);
