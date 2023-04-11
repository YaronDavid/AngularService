import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html'
})
export class ListadoTareasComponent {
  tareas: string[] = ["Barrer", "Trapear", "Cocinar", "Leer"]
}
