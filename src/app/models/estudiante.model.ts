export class Estudiante {
  constructor(
    public nombre: String,
    public carnet: String,
    public direccion: String,
    public genero: String,
    public telefono: String,
    public dateOfBirth: Date,
    public carrera: String,
    //Genero de poesía
    public generoPoesia: String,
    public fechaDelamacion: Date
  ) {}
}
