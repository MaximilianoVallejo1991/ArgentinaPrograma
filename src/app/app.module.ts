import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { XPComponent } from './components/xp/xp.component';
import { EdComponent } from './components/ed/ed.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { LogosAPComponent } from './components/logos-ap/logos-ap.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './components/xp/new-experiencia.component';
import { EditExperienciaComponent } from './components/xp/edit-experiencia.component';
import { NewEducacionComponent } from './components/ed/new-educacion.component';
import { EditEducacionComponent } from './components/ed/edit-educacion.component';
import { NewProyectosComponent } from './components/proyects/new-proyectos.component';
import { EditProyectosComponent } from './components/proyects/edit-proyectos.component';
import { NewSkillsComponent } from './components/new-skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutmeComponent,
    XPComponent,
    EdComponent,
    SkillsComponent,
    ProyectsComponent,
    LogosAPComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewProyectosComponent,
    EditProyectosComponent,
    NewSkillsComponent,
    EditSkillsComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
