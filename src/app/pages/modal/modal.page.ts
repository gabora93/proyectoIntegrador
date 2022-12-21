import { Component, Input, OnInit } from '@angular/core';
import {  DataService } from '../../services/data.service';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Personajes } from 'src/app/interfaces/personajes.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() id: string | undefined;
  personaje: Personajes = {
    name: '',
    lastname: '',
    img: ''
  }

  constructor(private dataService: DataService, private modalCtrl: ModalController, private toastCtrl: ToastController,private alertCtrl: AlertController) { }

  ngOnInit() {
    this.dataService.getPersonajeById(this.id).subscribe((res: any) => {
      this.personaje = res;
    });
  }

  async deletePersonaje() {
    await this.dataService.deletePersonaje(this.personaje)
    this.modalCtrl.dismiss();
  }

  async updatePersonaje() {
    await this.dataService.updatePersonaje(this.personaje);
    const toast = await this.toastCtrl.create({
      message: 'Personaje actualizado!.',
      duration: 2000
    });
    toast.present();

  }

  async confirmDelete() {
    const alert = await this.alertCtrl.create({
      header: 'Desea eliminar personaje?',
      
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Eliminar',
          handler: res => {
            this.deletePersonaje()
          }
        }
      ]
    });

    await alert.present();
  }
}