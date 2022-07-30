import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante.model';
import { EstudianteService } from 'src/app/service/estudiante.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
  providers: [EstudianteService]
})
export class ReporteComponent implements OnInit {
  estudianteModelGet: Estudiante;

  constructor(public _estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.getRegistros();
  }

  getRegistros() {
    this._estudianteService.verSolicitud().subscribe(
      (response) => {
        this.estudianteModelGet = response.formulario;
      }
    )
  }

}
