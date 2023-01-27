import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Acerca de', url: '/about', icon: 'help' },
    { title: 'Clima', url: '/weather', icon: 'cloud'},
    { title: 'Personas', url: '/mascotas', icon: 'people'},
    { title: 'Perfil', url: '/profile', icon: 'person'},
    { title: 'Currency', url:'/currency', icon: 'card'},
    { title: 'Monas chinas (?', url: '/villager', icon: 'book'}
  ];
  public labels = [];


  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private router:Router) 
    {
    this.presentSplash();
  }

  async presentSplash(){
    const modal = await this.modalController.create({
      component: SplashComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }
}
