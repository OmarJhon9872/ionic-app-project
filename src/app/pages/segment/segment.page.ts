import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-segment',
    templateUrl: './segment.page.html',
    styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

    heroes: Observable<any[]>;

    valorBuscado: string = '';

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.heroes = this.dataService.getHeroes();
    }

    segmentChanged(evento:any){
        this.valorBuscado = evento.detail.value;
    }

}
