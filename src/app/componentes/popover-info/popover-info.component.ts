import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-popover-info',
    templateUrl: './popover-info.component.html',
    styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

    elementos = Array(10);

    constructor(private popOverClose: PopoverController) { }

    ngOnInit() { }

    onClick(valor: number){

        this.popOverClose.dismiss({
            numero: valor
        });
    }
}
