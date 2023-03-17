import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-atbash',
  templateUrl: './atbash.page.html',
  styleUrls: ['./atbash.page.scss'],
})

export class AtbashPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;
  currentIndex: number | string = 0;
  idSlide: string | number = this.activeRoute.snapshot.paramMap.get('idSlide');
  nombre: string = 'Algoritmo Atbash';
  alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  constructor(private alertController: AlertController,
    private activeRoute: ActivatedRoute) { }

  params = {
    Cifrado: {
      textoEntrada: '',
      textoSalida: ''
    },
    Descifrado: {
      textoEntrada: '',
      textoSalida: ''
    }
  }

  slideOpts = {
    initialSlide: this.idSlide !== null ? this.currentIndex = Number(this.idSlide) : this.currentIndex = 0,
    speed: 400,
    slidesPerView: 1.1,
    centeredSlides: true,
  };

  ngOnInit() {

  }

  cifradoAtbash() {
    var texto = "";
    var posLetra = 0;
    var textoFinal = "";

    texto = this.params.Cifrado.textoEntrada.toUpperCase();
    // console.log("this.params.textoCifrar", this.params.textoCifrar);
    // console.log("this.alfabeto", this.alfabeto);
    // console.log("this.alfabeto.reverse()", this.alfabeto.reverse());
    // console.log("texto", texto);

    if (!texto) {
      this.presentAlert('Por favor digita texto a cifrar');
    } else {
      for (var i = 0; i < texto.length; i++) {
        if (texto[i] == " ") {
          textoFinal = textoFinal + " ";
        } else {
          posLetra = this.alfabeto.indexOf(texto[i]);
          if (posLetra != -1) {
            this.alfabeto.reverse();
            textoFinal = textoFinal + this.alfabeto[posLetra];
            this.alfabeto.reverse();
          } else {
            textoFinal = textoFinal + texto[i];
          }

        }
      }
    }
    this.params.Cifrado.textoSalida = textoFinal;
  }

  DescifradoAtbash() {
    var texto = "";
    var longTexto = 0;
    var posLetra = 0;
    var textoFinal = "";

    texto = this.params.Descifrado.textoEntrada.toUpperCase();
    longTexto = texto.length;

    if (!texto) {
      this.presentAlert('Por favor digita texto a descifrar');
    } else {
      for (var i = 0; i < longTexto; i++) {
        if (texto[i] == " ") {
          textoFinal = textoFinal + " ";
        } else {
          this.alfabeto.reverse();
          posLetra = this.alfabeto.indexOf(texto[i]);
          if (posLetra != -1) {
            this.alfabeto.reverse();
            textoFinal = textoFinal + this.alfabeto[posLetra];
          } else {
            textoFinal = textoFinal + texto[i];
          }

        }
      }
    }
    this.params.Descifrado.textoSalida = textoFinal;
  }

  limpiarComponentesCifrado() {
    this.params.Cifrado.textoEntrada = "";
    this.params.Cifrado.textoSalida = "";
  }

  limpiarComponentesDescifrado() {
    this.params.Descifrado.textoEntrada = "";
    this.params.Descifrado.textoSalida = "";
  }

  async presentAlert(etexto: string) {
    const alert = await this.alertController.create({
      header: 'Información',
      subHeader: 'Mensaje Importante',
      message: etexto,
      buttons: ['OK'],
    });

    await alert.present();
  }

  SlideChanges(slide: IonSlides) {
    slide.getActiveIndex().then((index: number) => {
      this.currentIndex = index;

    });
  }
}
