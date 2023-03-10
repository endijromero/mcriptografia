import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  // componentes: Observable<Componente[]>;
  integrantes: Observable<Componente[]>;
  nombre: string = 'Métodos Criptográficos';

  constructor(private menuCtrl: MenuController,
    private dataService: DataService) { }

  ngOnInit() {
    // this.componentes = this.dataService.getMenuOpts();
    this.integrantes = this.dataService.getIntegrantes();
  }

  mostrarMenu() {
    this.menuCtrl.open('first');
  }

}
