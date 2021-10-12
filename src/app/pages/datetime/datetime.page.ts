import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-datetime',
    templateUrl: './datetime.page.html',
    styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

    fechaActual: Date = new Date();

    customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

    customPickerOptions = {
        buttons:[
            {
                text: 'Boton1',
                handler: ( event ) => {
                    console.log(event);
                }
            },
            {
                text: 'Boton2',
                handler: ( event ) => {
                    console.log(event);
                }
            }
        ]
    };

    constructor() { }

    ngOnInit() {
    }

    cambioElElemento(evento){
        console.log(evento);
    }
}
