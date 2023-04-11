import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { SubtituloComponent } from '../subtitulo/subtitulo.component';
import { TareasService } from '../services/tareas.service';
import { ListadoTareasComponent } from '../listado-tareas/listado-tareas.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridComponent, SubtituloComponent, ListadoTareasComponent ],
      providers: [
        TareasService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
