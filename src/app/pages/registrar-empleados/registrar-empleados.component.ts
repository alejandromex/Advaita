import { Component, OnInit } from '@angular/core';
import { TrabajoService } from 'src/app/services/trabajo.service';

@Component({
  selector: 'app-registrar-empleados',
  templateUrl: './registrar-empleados.component.html',
  styleUrls: ['./registrar-empleados.component.css']
})
export class RegistrarEmpleadosComponent implements OnInit {


  solicitudes:any[] = [];

  constructor(
    private trabajoService: TrabajoService
  ) { }

  ngOnInit(): void {
    this.trabajoService.TraerSolicitudes("1").subscribe(
      (resp: any)=>{
        this.solicitudes = resp.content;
        console.log(this.solicitudes);
      },
      error =>{
        console.log(error);
      }
    )
  }

}
