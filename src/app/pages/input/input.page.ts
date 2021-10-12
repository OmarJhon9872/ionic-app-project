import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

 
@Component({
    selector: 'app-input',
    templateUrl: './input.page.html',
    styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

    nombre: string = '';
    
    usuario = {
        email: '',
        password: ''
    };

    //Recibimos la instancia de NgForm para manipulacion de datos
    onSubmit(formulario: NgForm){
        console.log(formulario);
        console.log("Formulario enviado");
    }

    constructor() { }

    ngOnInit() {
    }

}
