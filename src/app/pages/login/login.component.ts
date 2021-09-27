import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { StorageBlobService } from 'src/app/services/storageblob.service';
import { Usuario } from 'src/app/interfaces/Usuario';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  isTheRegisterActive = false;
  email: string = "";
  password: string = "";
  type: string = "usuario";
  name: string = "";
  apellidoP: string = "";
  apellidoM: string = "";
  celular: string = "";  
  img: File;
  content: string;
  ext: string;
  user: Usuario = {
    Nombre: "",
    ApellidoM: "",
    ApellidoP: "",
    Email: "",
    Imagen: "",
    Password: "",
    Phone:"",
    type: 0
  }


  constructor(
    private userService: UserService,
    private router:Router,
    private azureService: StorageBlobService
    //private storageBlob: StorageBlobService
  ) { }

  ngOnInit(): void {
    //this.storageBlob.UploadImage();
  }


  login(form: NgForm)
  {
    if(this.email == "" || this.password == "")
    {
      return;
    }
    this.userService.Login(this.email, this.password).subscribe(
      resp=>{
        console.log(resp);
        var userDto = {
          nombre: resp.content.nombre,
          apellidoP: resp.content.apellidoP,
          apellidoM: resp.content.ApellidoM,
          email: resp.content.email,
          id: resp.content.id,
          imagen: resp.content.imagen,
          phone: resp.content.phone,
          type: resp.content.type
        };
        localStorage.setItem("Usuario", JSON.stringify(userDto));
        this.router.navigate(["/home"]);
      },error=>{
        console.log(error);
      }
    )
  }

  showRegistro()
  {
    this.isTheRegisterActive = !this.isTheRegisterActive;
  }

  register(formRegister: NgForm)
  {
    this.user.Nombre = this.name;
    this.user.ApellidoM = this.apellidoM;
    this.user.ApellidoP = this.apellidoP;
    this.user.Phone = this.celular;
    this.user.Email = this.email;
    this.user.Password = this.password;
    this.user.type = 1;
    this.user.Imagen = new Date().getTime().toString() + this.ext;

    this.userService.Register(this.user).subscribe(
      (resp:any)=>{
        if(resp.status == 'ok')
        {

          this.azureService.UploadFile(this.content, this.user.Imagen).subscribe(
            respuesta =>{
              window.location.reload();

            },
            error2 =>{
              Swal.fire(
                'Subida de foto, Error',
                error2,
                'error'
              )            }
            )
        }
        else{
          Swal.fire(
            'Registro, Error',
            resp.content,
            'error'
          )
        }
      },
      error =>{
        Swal.fire(
          'Error de inicio',
          error,
          'error'
        )      }
    )

  }

  onChange(event)
  {
    this.img = event.target.files[0];
    const file = event.target.files[0];
    const reader = new FileReader();
    const exte = this.img.name.split('.')[1];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.content = reader.result.toString().split(',')[1];
      this.ext = "."+exte;
    };
  }

}
