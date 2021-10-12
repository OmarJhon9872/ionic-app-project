import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

    constructor(private alertController: AlertController) { }

    ngOnInit() {
    }

    //Alerta sencilla
    async presentAlert() {
        const alert = await this.alertController.create({
            //Si alguien da clic fuera del menu no se cerrara
            backdropDismiss: false,
            cssClass: 'my-custom-class',
            header: 'Alerta ejemplo',
            subHeader: 'Subtitulo alerta',
            message: 'Este es un mensaje de alerta.',
            buttons: ['OK']
        });

        await alert.present();

        const { role } = await alert.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
    }

    //Alerta con multiples opciones
    async presentAlertMultipleButtons() {
        const alert = await this.alertController.create({
            //Si alguien da clic fuera del menu no se cerrara
            backdropDismiss: false,
            cssClass: 'my-custom-class',
            header: 'Alerta ejemplo',
            subHeader: 'Subtitulo alerta',
            message: 'Este es un mensaje de alerta.',
            //Buttons se puede manejar como un array o un objeto
            //buttons: ['Cancel', 'Open Modal', 'Delete']
            buttons: [
                {
                    text: 'Ok!',
                    cssClass: 'claseOk',
                    handler: () => {
                        console.log("Se presiono el boton OK");
                    }
                },
                {
                    text: 'Opcion 2',
                    cssClass: 'claseOpcion2',
                    handler: () => {
                        console.log("Se presiono el boton Opcion2");
                    }
                },
                {
                    text: 'Cancelar',
                    cssClass: 'rojo',
                    role: 'cancel',
                    handler: () => {
                        console.log("Se presiono el boton Cancelar");
                    }
                }
            ]
        });

        await alert.present();
    }

    //Boton de solicitud de datos
    async presentAlertPrompt() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            backdropDismiss: false,
            header: 'Prompt!',
            inputs: [
                {
                    name: 'dato1Texto',
                    type: 'text',
                    id: 'name2-id',
                    value: 'Tipo texto',
                    placeholder: 'Placeholder 2'
                },
                // multiline input.
                {
                    name: 'dato2TextArea',
                    id: 'paragraph',
                    type: 'textarea',
                    placeholder: 'Placeholder 3'
                },
                {
                    name: 'dato3Url',
                    value: 'http://ionicframework.com',
                    type: 'url',
                    placeholder: 'Favorite site ever'
                },
                // input date with min & max
                {
                    name: 'dato4Date',
                    type: 'date',
                    min: '2017-03-01',
                    max: '2018-01-12'
                },
                // input date without min nor max
                {
                    name: 'dato5Number',
                    type: 'number',
                    min: -5,
                    max: 10
                },
                {
                    name: 'dato6Password',
                    type: 'password',
                    placeholder: 'Advanced Attributes',
                    cssClass: 'specialClass',
                    attributes: {
                        maxlength: 4,
                        inputmode: 'decimal'
                    }
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Boton Cancel presionado');
                    }
                }, {
                    text: 'Ok',
                    handler: (data: any) => {
                        console.log('Boton Ok presionado');
                        console.log(data);
                    }
                }
            ]
        });

        await alert.present();
    }

    //Radios
    async presentAlertRadio() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Radio',
            inputs: [
                {
                    name: 'radio1',
                    type: 'radio',
                    label: 'Radio 1',
                    value: 'value1',
                    handler: () => {
                        console.log('Radio 1 selected');
                    },
                    checked: true
                },
                {
                    name: 'radio2',
                    type: 'radio',
                    label: 'Radio 2',
                    value: 'value2',
                    handler: () => {
                        console.log('Radio 2 selected');
                    }
                },
                {
                    name: 'radio3',
                    type: 'radio',
                    label: 'Radio 3',
                    value: 'value3',
                    handler: () => {
                        console.log('Radio 3 selected');
                    }
                },
                {
                    name: 'radio4',
                    type: 'radio',
                    label: 'Radio 4',
                    value: 'value4',
                    handler: () => {
                        console.log('Radio 4 selected');
                    }
                },
                {
                    name: 'radio5',
                    type: 'radio',
                    label: 'Radio 5',
                    value: 'value5',
                    handler: () => {
                        console.log('Radio 5 selected');
                    }
                },
                {
                    name: 'radio6',
                    type: 'radio',
                    label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
                    value: 'value6',
                    handler: () => {
                        console.log('Radio 6 selected');
                    }
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Ok',
                    handler: () => {
                        console.log('Confirm Ok');
                    }
                }
            ]
        });

        await alert.present();
    }

    //Checkbox
    async presentAlertCheckbox() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Checkbox',
            inputs: [
                {
                    name: 'checkbox1',
                    type: 'checkbox',
                    label: 'Checkbox 1',
                    value: 'value1',
                    handler: () => {
                        console.log('Checkbox 1 selected');
                    },
                    checked: true
                },

                {
                    name: 'checkbox2',
                    type: 'checkbox',
                    label: 'Checkbox 2',
                    value: 'value2',
                    handler: () => {
                        console.log('Checkbox 2 selected');
                    }
                },

                {
                    name: 'checkbox3',
                    type: 'checkbox',
                    label: 'Checkbox 3',
                    value: 'value3',
                    handler: () => {
                        console.log('Checkbox 3 selected');
                    }
                },

                {
                    name: 'checkbox4',
                    type: 'checkbox',
                    label: 'Checkbox 4',
                    value: 'value4',
                    handler: () => {
                        console.log('Checkbox 4 selected');
                    }
                },

                {
                    name: 'checkbox5',
                    type: 'checkbox',
                    label: 'Checkbox 5',
                    value: 'value5',
                    handler: () => {
                        console.log('Checkbox 5 selected');
                    }
                },

                {
                    name: 'checkbox6',
                    type: 'checkbox',
                    label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
                    value: 'value6',
                    handler: () => {
                        console.log('Checkbox 6 selected');
                    }
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Ok',
                    handler: () => {
                        console.log('Confirm Ok');
                    }
                }
            ]
        });

        await alert.present();
    }
}
