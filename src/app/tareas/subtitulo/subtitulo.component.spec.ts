import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtituloComponent } from './subtitulo.component';
import { TareasService } from '../services/tareas.service';

describe('SubtituloComponent', () => {
  let component: SubtituloComponent;
  let fixture: ComponentFixture<SubtituloComponent>;
  let service: TareasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtituloComponent ],
      providers: [
        TareasService
      ]
    })
    .compileComponents();
    service = TestBed.inject(TareasService)

    fixture = TestBed.createComponent(SubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
   expect(component).toBeTruthy();
  });

  it("Deberia renderizar prueba con 4 elementos", ()=>{
    const render : HTMLElement = fixture.nativeElement;

    const tareas = render.querySelector("#tareas")?.textContent?.trim()

    expect(tareas).toEqual('Numero de tareas: 4')
  })

  it("Deberia disminuir 1 si elimino un elemento", ()=>{

    const render : HTMLElement = fixture.nativeElement;
    service.deleteTarea('Barrer')

    fixture.detectChanges()
    const tareas = render.querySelector("#tareas")?.textContent?.trim()
   
    expect(tareas).toEqual('Numero de tareas: 3')
  })

  it("Deberia mostrar NO HAY TAREAS EN LA LISTA", ()=>{

    const render : HTMLElement = fixture.nativeElement;
    service.deleteTarea('Barrer')
    service.deleteTarea('Trapear')
    service.deleteTarea('Cocinar')
    service.deleteTarea('Leer')

    fixture.detectChanges()
    const tareas = render.querySelector("#sinTareas")?.textContent?.trim()
   
    expect(service.tareas.length).toBe(0)
    expect(tareas).toEqual('NO HAY TAREAS EN LISTA')
  })

});
