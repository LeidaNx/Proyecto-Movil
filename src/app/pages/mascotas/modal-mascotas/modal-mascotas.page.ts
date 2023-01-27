import { Component, OnInit, Input } from '@angular/core';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Mascota } from 'src/app/services/mascotas';
import { MascotasService } from 'src/app/services/mascotas.service';

@Component({
  selector: 'app-modal-mascotas',
  templateUrl: './modal-mascotas.page.html',
  styleUrls: ['./modal-mascotas.page.scss'],
})
export class ModalMascotasPage implements OnInit {

  @Input() id: string = '';
  mascota?: Mascota; 

  constructor(
    private mascotasService: MascotasService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.getMascota();
  }

  getMascota(){
    this.mascotasService.getMascotaById(this.id).subscribe(data => {
      this.mascota = data;
    });
  }

  async updateMascota(){
    this.mascotasService.updateMascota(this.mascota!);
    this.modalCtrl.dismiss();
    this.toastPresent('Persona actualizada',2000);
  }

  async deleteMascota(){
    const alert = await this.alertCtrl.create({
      header: 'Eliminando...',
      message:'Estas seguro que deseas eliminar a la persona?',
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Delete',
          role:'confirm',
          handler: () => {
            this.mascotasService.deleteMascota(this.mascota!);
            this.modalCtrl.dismiss();
            this.toastPresent('Persona eliminada',2000);
          }
        }
      ]
    });
    await alert.present();
  }

  async toastPresent(message:string, duration:number){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration
    });
    await toast.present();
  }

  async changeImage(mascota:Mascota){
    const image = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    console.log(image);

    if(image){
      const loading = await this.loadingCtrl.create();
      await loading.present();

      const results = await this.mascotasService.changePhoto(image,mascota);
      loading.dismiss();

      if(!results){
        const alert = await this.alertCtrl.create({
          header: 'Carga de imagen fallida',
          message:'Hubo un problema durante la carga de la imagen.',
          buttons: ['OK']
        });
        await alert.present();
      }
    }
  }

}
