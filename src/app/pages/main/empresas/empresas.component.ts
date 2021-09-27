import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TrabajoService } from 'src/app/services/trabajo.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  idEmpresa: string;
  nombre: string = "";
  apellidoP: string = "";
  email: string = "";
  phone: string = "";
  imagen: string = "";

  constructor(
    private trabajoService: TrabajoService
  ) { }

  ngOnInit(): void {


    var usuario = JSON.parse(localStorage.getItem("Usuario"));
    this.nombre = usuario.nombre;
    this.apellidoP = usuario.apellidoP;
    this.email = usuario.email;
    this.phone = usuario.phone;
    this.imagen = usuario.imagen;

  
  }

  Solicitar()
  {
    if(this.idEmpresa != "")
    {
      if(localStorage.getItem("Usuario"))
      {
        var usuario = JSON.parse(localStorage.getItem("Usuario"));
        var usuarioDTO = {
          IdEmpleado: Number(usuario.id),
          IdEmpresa: 1,
          Nombre: usuario.nombre,
          Desc: "Registro Empresa"
        };            

        this.trabajoService.CrearSolicitudTrabajo(usuarioDTO).subscribe(
          resp=>{
            console.log(resp);
          },
          error =>{
            console.log(error);
          }
        )

      }
    }
  }

}


