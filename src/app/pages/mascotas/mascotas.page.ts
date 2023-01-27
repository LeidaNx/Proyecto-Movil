import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Mascota } from 'src/app/services/mascotas';
import { MascotasService } from 'src/app/services/mascotas.service';
import { ModalMascotasPage } from './modal-mascotas/modal-mascotas.page';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.page.html',
  styleUrls: ['./mascotas.page.scss'],
})
export class MascotasPage implements OnInit {

  mascotas: Mascota[] = [];
  pageTitle = 'Personas';
  image = 'gente.png';
  pageIcon = `../../../assets/img/${this.image}`;

  constructor(private mascotasService: MascotasService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
    ) { 
    this.getMascotas();
  }

  ngOnInit() {
  }

  getMascotas(){
    this.mascotasService.getMascotas()
      .subscribe(data => {
        console.log(data);
        this.mascotas = data;
    })
  }

  async addMascota(){
    const alert = await this.alertCtrl.create({
      header: 'Registrar Persona',
      inputs: [
        {
          name:'nombre',
          type:'text',
          placeholder:'Nombre...'
        },
        {
          name:'rut',
          type:'text',
          placeholder:'Numero de documento'
        },
        {
          name:'edad',
          type:'number',
          placeholder:'Edad...'
        },
        {
          name:'sexo',
          type:'text',
          placeholder:'Genero identificado'
        },
        {
          name:'estado',
          type:'text',
          placeholder:'Estado civil actual'
        },
        {
          name:'ocupacion',
          type:'text',
          placeholder:'A que se dedica'
        },          
      ],
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Save',
          role:'confirm',
          handler: (data) => {
            this.mascotasService.addMascota(data)
          }
        }
      ]
    });
    await alert.present();
  }

  async openMascota(mascota:Mascota){
    const modal = await this.modalCtrl.create({
      component: ModalMascotasPage,
      componentProps: {id:mascota.id},
      initialBreakpoint: 1.0,
      breakpoints: [0,0.5,0.8],
    });
    await modal.present();
  }


}
