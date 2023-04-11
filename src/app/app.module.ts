import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TareasModule } from './tareas/tareas.module';
import { GridComponent } from './tareas/grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TareasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
