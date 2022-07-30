export class Estudiante {
  constructor(
    public _id: String,
    public nombre: String,
    public carnet: String,
    public direccion: String,
    public genero: String,
    public telefono: String,
    public dateofBirth: Date,
    public idCarrera: String,
    public idGeneroP: String,
    public fechaDeInscripcion: Date,
    public fechaDelamacion: Date,
  ) {}
}
