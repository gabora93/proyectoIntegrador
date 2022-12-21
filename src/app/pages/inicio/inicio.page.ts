import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Personajes } from 'src/app/interfaces/personajes.interface';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  personajes: Personajes[] = [];

  constructor(private dataService: DataService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.dataService.getPersonajes().subscribe(res => {
      this.personajes = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
  }

  async openPersonaje(personaje: Personajes) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { id: personaje.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8
    });

    await modal.present();
  }

  async addPersonaje() {
    const alert = await this.alertCtrl.create({
      header: 'Agregar Personaje',
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'Nombre de personaje',
          type: 'text'
        },
        {
          name: 'Apellido',
          placeholder: 'Apellido de personaje',
          type: 'text'
        },
        {
          name: 'Imagen',
          placeholder: 'url de imagen',
          type: 'text'
        },
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Add',
          handler: res => {
            this.dataService.addPersonaje({ name: res.Nombre, lastname: res.Apellido, img: res.Imagen });
          }
        }
      ]
    });

    await alert.present();
  }
}
