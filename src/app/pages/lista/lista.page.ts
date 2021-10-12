import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.page.html',
    styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

    usuarios: Observable<any>;

    //Para cerrar los ionList se hace referencia con el selector, se importa y se implementa
    @ViewChild(IonList)
    ionList: IonList;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.usuarios = this.dataService.getUsuarios();
    }

    favorite(user: any){
        console.log('Favorite: ', user);
        this.ionList.closeSlidingItems();
    }

    share(user: any){
        console.log('Share: ',  user);
        this.ionList.closeSlidingItems();
    }

    borrar(user: any){
        console.log('Borrar: ', user);
        this.ionList.closeSlidingItems();
    }

}
