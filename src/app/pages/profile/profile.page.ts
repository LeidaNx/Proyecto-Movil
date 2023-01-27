import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  pageTitle = '404'; 
  profile: any = null;


  constructor(
    private profileService: ProfileService,
    private alertCtrl : AlertController,
    private loadingCtrl: LoadingController,
  ) { 
    this.loadProfile();
  }

  ngOnInit() {
  }

  loadProfile(){
    this.profileService.getUserProfile().subscribe(respuesta => {
      this.profile = respuesta;
    });
  }

  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    if(avatar){
      const loading = await this.loadingCtrl.create();
      await loading.present();
      const result = await this.profileService.changePhoto(avatar);
      loading.dismiss();

      if(!result){
        this.alertPresent('Carga de avatar fallida','Se ha producido un error, inténtelo más rato');
      }
    }
  }

  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['OK']
    });
    await alert.present();
  }
}