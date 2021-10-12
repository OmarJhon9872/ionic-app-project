import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-cargando',
    templateUrl: './cargando.page.html',
    styleUrls: ['./cargando.page.scss'],
})
export class CargandoPage implements OnInit {

    //Promesa de tipo HTMLIonLoadingElement
    loading: HTMLIonLoadingElement;


    constructor(private loadingController: LoadingController) { }

    ngOnInit() {
    }

    //Se llama a la funcion presentLoading()
    mostrarLoading() {
        this.presentLoading('Cargando desde el metodo mostrarLoading'); 

        //Tras la ejecucion de cierto metodo y este finaliza detenemos el loading
        setTimeout(() => {
            //Dimiss da fin al efecto de loading
            this.loading.dismiss();
        }, 2000);
    }

    //Ya que se debera esperar un timing o recuperacion de datos usamos async
    async presentLoading( message:string ) {
        //This.loading es una instancia de HTMLIonLoadingElement manipulable
        //Pasamos a mostrarLoading() para detener cuando la data es recibida setTimeout()
        this.loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message,
            duration: 1000 //Hasta que se recibe la data
        });
        await this.loading.present();
    }
}

