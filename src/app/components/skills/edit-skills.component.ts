import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  skil: Skills = null;

  constructor(private skill: SkillsService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skill.detail(id).subscribe(
      data =>{
        this.skil = data;
      }, err =>{
        alert("Error al modificar Skill");
        this.router.navigate(['']);
      }
    )
    
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skill.update(id, this.skil).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar skill");
         this.router.navigate(['']);
      }
    )
  }

}
