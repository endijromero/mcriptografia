import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hexa-to-decimal',
  templateUrl: './hexa-to-decimal.page.html',
  styleUrls: ['./hexa-to-decimal.page.scss'],
})

export class HexaToDecimalPage implements OnInit {
  nombre: string = 'Conversor hexadecimal a decimal';
  digitoHex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  valorBinario = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"];

  binaryComponentOne = ""
  binaryComponentTwo = ""
  binaryCombinedKey = ""

  params = {
    combinedkey: '',
    componentone: '',
    componenttwo: ''
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  generarClave() {
    var componente1 = "";
    var componente2 = "";
    var binario1 = "";
    var binario2 = "";
    var val1, val2 = "";
    var cantDigitos = 128 / 4;
    var clave = "";

    for (var i = 0; i < cantDigitos; i++) {
      val1 = this.obtenerNumero();
      componente1 = componente1 + this.digitoHex[val1];
      binario1 = binario1 + this.valorBinario[val1];

      val2 = this.obtenerNumero();
      componente2 = componente2 + this.digitoHex[val2];
      binario2 = binario2 + this.valorBinario[val2];
    }

    this.params.componentone = componente1;
    this.params.componenttwo = componente2;
    this.binaryComponentOne = binario1;
    this.binaryComponentTwo = binario2;

    console.log("this.binaryComponentOne:::", this.binaryComponentOne);
    console.log("this.binaryComponentOne:::", this.binaryComponentTwo);
    let claveBinaria = this.sumaConXOR(binario1, binario2);
    let claveHexa = this.binarioAHexadecimal(claveBinaria);

    this.binaryCombinedKey = claveBinaria;
    this.params.combinedkey = claveHexa;
  }

  obtenerNumero() {
    let numero = (Math.random() * 15).toFixed(0);
    return numero;
  }

  sumaConXOR(str1, str2) {
    let result = "";
    console.log("str1.length", str1.length);
    for (let i = 0; i < str1.length; i++) {
      let charCode1 = str1.charCodeAt(i);
      let charCode2 = str2.charCodeAt(i % str2.length);
      let xorResult = charCode1 ^ charCode2;

      result += xorResult;
      console.log("xorResult:::", xorResult);
    }

    return result;
  }

  binarioAHexadecimal(binario) {
    let longitudBinario = binario.length;
    let inicio = 0;
    let final = 4;
    let decimal = 0;
    let hexadecimal = "";
    let numeroHexa = "";
    let binHexa;

    while (final <= longitudBinario) {
      binHexa = binario.slice(inicio, final);
      decimal = parseInt(binHexa, 2);
      hexadecimal = decimal.toString(16);
      numeroHexa = numeroHexa + hexadecimal.toUpperCase();
      inicio = inicio + 4;
      final = final + 4;
    }

    return numeroHexa;
  }

  combinarNumeros() {
    var compon1 = this.params.componentone;
    var compon2 = this.params.componenttwo;

    var compon1Bin = "";
    var compon2Bin = "";

    if (compon1 != "" && compon1.length == 32) {
      compon1Bin = this.hexadecimalABinario(compon1);
      console.log("compon1Bin", compon1Bin);

      if (compon1Bin == "0") {
        this.presentAlert('Solo se permiten caracteres del 0-9 y de la A-F');
        return false;
      } else {
        this.binaryComponentOne = compon1Bin;
      }
    } else {
      this.presentAlert('Componente No. 1 incorrecto - Recuerde que es de 32 Bytes');
      return false;
    }

    if (compon2 != "" && compon2.length == 32) {
      compon2Bin = this.hexadecimalABinario(compon2);

      if (compon2Bin == "0") {
        this.presentAlert('Solo se permiten caracteres del 0-9 y de la A-F');
        return false;
      } else {
        this.binaryComponentTwo = compon2Bin;
      }
    } else {
      this.presentAlert('Componente No. 2 incorrecto - Recuerde que es de 32 Bytes');
      return false;
    }

    let claveBinaria = this.sumaConXOR(compon1Bin, compon2Bin);
    let claveHexa = this.binarioAHexadecimal(claveBinaria);

    this.binaryCombinedKey = claveBinaria;
    this.params.combinedkey = claveHexa;
  }

  hexadecimalABinario(hexadecimal) {
    let longitudHexa = hexadecimal.length;
    let error = false;
    let numeroBinario = "";

    for (let i = 0; i < longitudHexa; i++) {
      let hexaBin = hexadecimal[i];
      let posHexa = this.digitoHex.indexOf(hexaBin);
      if (posHexa == -1) {
        error = true;
        i = longitudHexa;
      } else {
        numeroBinario = numeroBinario + this.valorBinario[posHexa];
      }
    }

    if (error == false) {
      return numeroBinario;
    } else {
      return "0";
    }
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

}
