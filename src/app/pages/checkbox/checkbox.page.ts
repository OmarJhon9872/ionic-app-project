import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.page.html',
    styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

    tiposCheckColors: any = [
        {
            name: 'primary',
            selected: false
        },
        {
            name: 'secondary',
            selected: true
        },
        {
            name: 'danger',
            selected: true
        },
        {
            name: 'light',
            selected: true
        },
        {
            name: 'dark',
            selected: false
        },
        {
            name: 'tertiary',
            selected: false
        },
        {
            name: 'success',
            selected: true
        },
        {
            name: 'warning',
            selected: false
        },
        {
            name: 'medium',
            selected: true
        },
    ];

    constructor() { }

    ngOnInit() {
    }

    onClick(item: any){
        console.log(item);
    }

}
