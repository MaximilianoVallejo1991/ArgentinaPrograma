import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from 'src/app/service/skills.service';
import { Skills } from 'src/app/model/skills';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})

export class NewSkillsComponent implements OnInit {

  nombreS: string = '';
  porcentajeS: string = '';
  urlS: string = '';
  fotoS: Blob ;

  constructor(private sSkills: SkillsService, private router: Router) { }
 
  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skills(this.nombreS, this.porcentajeS, this.urlS, this.fotoS);
    this.sSkills.save(skill).subscribe(
      data =>{
        alert("Skill añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}