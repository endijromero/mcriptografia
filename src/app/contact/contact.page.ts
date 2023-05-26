import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  nombre: string = 'Contacto';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  enviarAsunto() {
    this.presentAlert("Mensaje enviado");
  }

  async presentAlert(etexto: string) {
    const alert = await this.alertController.create({
      header: 'Información',
      message: etexto,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
