import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
//import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    componentes: Observable<Componente[]>;


    //6.- Inyectamos el servicio de menu e importamos de @ionic/angular
    //7.- Llamamos al metodo abrirMenu()
    //constructor( private menuCtl: MenuController) { }

    constructor(
        private dataService: DataService
        // private menuCtrl: MenuController
    ) { }

    //8.- Abrimos el menu con el indicador de menuId('first')
    // abrirMenu(){
    //     this.menuCtl.open('first');
    // }

    ngOnInit() {
        //Al ser una variable de tipo Observable se inyecta en el servicio y al
        //definir el tipo de objeto a recibir mediante la interfaz Componente se lee correcto
        this.componentes = this.dataService.getOptsMenu();
    }

}
