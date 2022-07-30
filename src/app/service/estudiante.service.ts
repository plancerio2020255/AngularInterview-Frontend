import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Estudiante } from '../models/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  public url: String = "http://localhost:3000/api";
  public headersV = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }
  agregarSolicitud(modeloEstudiante: Estudiante) : Observable<any> {
    let parametros  = JSON.stringify(modeloEstudiante);
    return this._http.post(this.url + "/registrarParticipacion", parametros, {headers: this.headersV})
  }
}
