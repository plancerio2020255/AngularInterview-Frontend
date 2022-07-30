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
  public estudianteModelGet: Estudiante;

  constructor(public _estudianteService: EstudianteService) {
    this.estudianteModelPost = new Estudiante(
      '',
      '',
      '',
      '',
      '',
      new Date(),
      '',
      '',
      new Date()
    );
  }

  generos = [{ genero: 'Masculino' }, { genero: 'Femenino' }];
  GeneroPoesia = [
    { genero: 'Lirico' },
    { genero: 'Epico' },
    { genero: 'Dramatico' },
  ];
  Carreras = [
    { carrera: 'Informatica' },
    { carrera: 'Electricidad' },
    { carrera: 'Dibujo' },
  ];

  ngOnInit(): void {}
  postSolicitud() {
    this._estudianteService
      .agregarSolicitud({ modeloEstudiante: this.estudianteModelPost })
      .subscribe(
        (response) => {
          console.log(response);
          (this.estudianteModelPost.nombre = ''),
            (this.estudianteModelPost.carnet = ''),
            (this.estudianteModelPost.direccion = ''),
            (this.estudianteModelPost.genero = ''),
            (this.estudianteModelPost.telefono = ''),
            (this.estudianteModelPost.dateOfBirth = new Date()),
            (this.estudianteModelPost.carrera = ''),
            (this.estudianteModelPost.generoPoesia = ''),
            (this.estudianteModelPost.fechaDelamacion = new Date());
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Solicitud Agregada Correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: 'success',
            title: 'Solicitud enviada',
          });
        },
        (error) => {
          console.log(<any>error);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: 'warning',
            title: error.error.mensaje,
          });
        }
      );
  }
}
