import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-infinite',
    templateUrl: './infinite.page.html',
    styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

    @ViewChild( IonInfiniteScroll )
    infiniteScroll: IonInfiniteScroll;


    data: any = Array(20);

    constructor() { }

    ngOnInit() {
    }

    loadData(event){

        setTimeout(()=>{

            //Si la data contiene mas de 50 elementos
            if(this.data.length > 50){
                //Detenemos el infinitescroll
                this.infiniteScroll.complete();
                //Se deshabilita el scrolling y se elimina el espacio de "Loading"
                this.infiniteScroll.disabled = true;
                return;
            }

            //Agregamos 20 elementos mas a la data que se mostrata
            const nuevaData = Array(20);
            this.data.push(...nuevaData);

            //Indicamos que la carga se completo
            event.target.complete();
        }, 1500);
        
    }

}
