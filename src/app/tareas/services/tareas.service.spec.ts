import { TareasService } from "./tareas.service"

describe('TareasService',()=>{
    let service: TareasService;

    beforeEach(()=>{
        service = new TareasService();
    })

    it("ToBe: el servicio debe iniciar en 4 tareas", ()=>{
        expect(service.tareas.length).toBe(4)
    })
    it("Borra la tarea Barrer", ()=>{
        service.deleteTarea("Barrer");
        expect(service.tareas.length).toBe(3)
    })
    it("No deberia borrar una tarea que no existe", ()=>{
        service.deleteTarea("Limpiar");
        expect(service.tareas.length).toBe(4)
    });
    it("Spy: deberia llamar la funcion completar 1 sola vez", ()=>{
        const spia = jasmine.createSpyObj("TareasService", ['completarTarea']);

        spia.completarTarea();

        expect(spia.completarTarea.calls.count()).toBe(1);
    })
});