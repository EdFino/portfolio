import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ProjectsService } from '../services/project-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,

  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

    @Input () project ! : Project;

    constructor (private router: Router) {}

    onViewProject() {
        this.router.navigateByUrl(`project/${this.project.id}`)
    }
}
