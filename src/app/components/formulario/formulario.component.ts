import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante.model';
import { EstudianteService } from 'src/app/service/estudiante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [EstudianteService],
})
export class FormularioComponent implements OnInit {
  public estudianteModelPost: Estudiante;

  constructor(public _estudianteService: EstudianteService) {
    this.estudianteModelPost = new Estudiante(
      '',
      '',
      '',
      '',
      '',
      '',
      new Date(),
      '',
      '',
      new Date(),
      new Date()
    );
  }

  generos: string[] = ['Masculino', 'Femenino'];

  ngOnInit(): void {}
  postSolicitud() {
    this._estudianteService
      .agregarSolicitud(this.estudianteModelPost)
      .subscribe(
        (response) => {
          console.log(response);
          (this.estudianteModelPost.nombre = ''),
            (this.estudianteModelPost.carnet = ''),
            (this.estudianteModelPost.direccion = ''),
            (this.estudianteModelPost.genero = ''),
            (this.estudianteModelPost.telefono = ''),
            (this.estudianteModelPost.dateofBirth = new Date()),
            (this.estudianteModelPost.idCarrera = ''),
            (this.estudianteModelPost.idGeneroP = ''),
            (this.estudianteModelPost.fechaDeInscripcion = new Date()),
            (this.estudianteModelPost.fechaDelamacion = new Date());
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Solicitud Agregado Correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(<any>error);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: error.error.mensaje,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  }
}
