import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html'
})
export class ListadoTareasComponent {
  constructor(private tareasService: TareasService){  }

  get tareas(){
    return this.tareasService.tareas;
  }

  del(nombreTarea: string){
    this.tareasService.deleteTarea(nombreTarea);
  }
  complete(nombreTarea: string){
    this.tareasService.completarTarea(nombreTarea);
  }
}
