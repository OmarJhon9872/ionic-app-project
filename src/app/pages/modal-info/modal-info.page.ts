import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal-info',
    templateUrl: './modal-info.page.html',
    styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

    @Input() nombrenuevo: string;
    @Input() edadnueva: string;

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    salirSinArgumentos() {
        this.modalCtrl.dismiss();
    }

    //En esta funcion al momento de hacer un dimiss, mandamos los parametros
    //basados en los decoradores @input
    salirConArgumentos(){
        this.modalCtrl.dismiss({
            nombrenuevo: 'Omar',
            edadnueva: '23'
        });
    }
}
