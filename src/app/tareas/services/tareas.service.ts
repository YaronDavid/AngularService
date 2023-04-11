import { Injectable } from "@angular/core";
import { Tarea } from "../interfaces/tarea.interface";

@Injectable()
export class TareasService{
    tareas: Tarea[] = [
    {tarea: "Barrer", complete: false},
    {tarea: "Trapear", complete: true},
    {tarea: "Cocinar", complete: false},
    {tarea: "Leer", complete: true}];

    deleteTarea(nombreTarea:string){
        this.tareas = this.tareas.filter(tarea => tarea.tarea !== nombreTarea)
    }

    completarTarea(nombreTarea: string){
        const tarea: Tarea = this.tareas.find(tarea => tarea.tarea == nombreTarea)!

        tarea.complete = !tarea.complete;

        console.log(tarea)
    }
}