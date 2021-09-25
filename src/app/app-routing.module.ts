import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CertificationsComponent } from './pages/main/certifications/certifications.component';
import { EmpresasComponent } from './pages/main/empresas/empresas.component';
import { MainComponent } from './pages/main/main.component';
import { RegistrarEmpleadosComponent } from './pages/main/registrar-empleados/registrar-empleados.component';



const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: MainComponent, children:[
      {path: '', component: EmpresasComponent}
    ]},
    {path: 'home', component: MainComponent, children:[
      {path: '', component: EmpresasComponent},
      {path: 'empresas', component: EmpresasComponent},
      {path: 'certification', component: CertificationsComponent}
    ]},
    {path: 'registro', component: RegistrarEmpleadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }