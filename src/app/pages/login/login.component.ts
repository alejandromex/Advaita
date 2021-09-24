import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('5s ease',
              style({ height: 283, opacity: 1 }))
          ]
        )
      ]
    ), trigger(
      'imageFade',
      [
        transition(
          ':enter',
          [
            style({opacity:0}),
            animate('1s ease',
              style({opacity:1}))
          ]
        )
      ]
    )
  ]
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  

  constructor(
    private userService: UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }


  login(form: NgForm)
  {
    if(this.email == "" || this.password == "")
    {
      return;
    }
    this.userService.Login(this.email, this.password).subscribe(
      resp=>{
        this.router.navigate(["/home"]);
      },error=>{
        console.log(error);
      }
    )
  }

}
