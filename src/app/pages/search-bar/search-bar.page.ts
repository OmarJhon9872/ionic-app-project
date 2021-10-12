import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../interfaces/album';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.page.html',
    styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

    //Paso 2/3
    //albums: Observable<Album[]>;
    albums: any[];

    textoABuscar: string = "";

    constructor(private dataService: DataService) { }

    ngOnInit() {
        //Paso 3/3 albums ejemplo con | async en html
        //this.albums = this.dataService.getAlbums();
        this.dataService.getAlbums().subscribe( albums => {
            this.albums = albums;
        });
    }

    onSearchChange(evento: any) {
        console.log(evento);
        this.textoABuscar = evento.detail.value;
    }

}
