import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmpresasComponent } from './pages/main/empresas/empresas.component';
import { RegistrarEmpleadosComponent } from './pages/main/registrar-empleados/registrar-empleados.component';
import { CertificationsComponent } from './pages/main/certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SidebarComponent,
    EmpresasComponent,
    RegistrarEmpleadosComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
