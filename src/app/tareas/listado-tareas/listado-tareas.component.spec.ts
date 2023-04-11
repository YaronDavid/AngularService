import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTareasComponent } from './listado-tareas.component';
import { SubtituloComponent } from '../subtitulo/subtitulo.component';
import { TareasService } from '../services/tareas.service';

describe('ListadoTareasComponent', () => {
  let component: ListadoTareasComponent;
  let fixture: ComponentFixture<ListadoTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTareasComponent, SubtituloComponent ],
      providers: [
        TareasService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
