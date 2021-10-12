import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

    //Para mandar del padre al hijo se definien y mandan propiedades con decoradores Input
    @Input() nombre: string;
    @Input() edad: number;


    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    async mostrarModal() {
        const modal = await this.modalCtrl.create({
            component: ModalInfoPage,
            cssClass: 'my-custom-class',
            //Mandamos las propiedades declaradas al hijo
            componentProps: {
                nombre: 'Jon',
                edad: 22
            }
        });
        await modal.present();

        //Ya que la peticion devuelve un "role" y una "data" podemos directamente
        //llamar a la data que se recibira
        //onDid se lanzada una vez que el modal se cierra
        const { data } = await modal.onDidDismiss();
        //onWill se lanzada inmediatamente cuando se de clic a cerrar
        //const { data } = await modal.onWillDismiss();
        console.log(data);
    }

}
