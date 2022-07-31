import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienciaComponent } from './components/xp/new-experiencia.component';
import { EditExperienciaComponent } from './components/xp/edit-experiencia.component';
import { NewEducacionComponent } from './components/ed/new-educacion.component';
import { EditEducacionComponent } from './components/ed/edit-educacion.component';
import { NewProyectosComponent } from './components/proyects/new-proyectos.component';
import { EditProyectosComponent } from './components/proyects/edit-proyectos.component';
import { NewSkillsComponent } from './components/new-skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},   
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NewEducacionComponent},
  { path: 'editedu/:id', component: EditEducacionComponent},
  { path: 'nuevoproy', component: NewProyectosComponent},
  { path: 'editproy/:id', component: EditProyectosComponent},
  { path: 'nuevoski', component: NewSkillsComponent},
  { path: 'editski/:id', component: EditSkillsComponent},


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

