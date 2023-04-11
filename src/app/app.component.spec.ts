import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GridComponent } from './tareas/grid/grid.component';
import { TareasModule } from './tareas/tareas.module';
import { SubtituloComponent } from './tareas/subtitulo/subtitulo.component';
import { TareasService } from './tareas/services/tareas.service';
import { ListadoTareasComponent } from './tareas/listado-tareas/listado-tareas.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GridComponent,
        SubtituloComponent,
        ListadoTareasComponent
      ],
      providers: [
        TareasService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
});
