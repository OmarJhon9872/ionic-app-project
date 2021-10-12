import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../interfaces/album';
import { Componente } from '../interfaces/interfaces';

import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) { }

    getUsuarios() {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    }

    //En inicio.page.ts, se crea el objeto de tipo interfaz Componente en array[],
    //Obtenemos aqui mediante metodo get e implementamos en ngOnInit() de inicio.page.ts
    //inyectando el servicio de DataService de aqui
    getOptsMenu() {
        return this.httpClient.get<any[]>('assets/data/menu.opts.json');
        //Paso 1/3 search-bar.page.ts
        //return this.httpClient.get<Componente[]>('assets/data/menu.opts.json');
    }

    getAlbums(){
        return this.httpClient.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
    }

    getHeroes() {
        return this.httpClient.get<any[]>('assets/data/heroes.json')
                .pipe( delay(1500) );
    }

}
