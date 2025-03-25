import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectComponent } from '../project/project.component';
import { ProjectsService } from '../services/project-service';

@Component({
  selector: 'app-project-list',
  imports: [ProjectComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {
    allProjects!: Project[];

    constructor(private projectservices: ProjectsService ) {

    }

    ngOnInit(): void {

        this.allProjects = this.projectservices.getProjects();

    }

}
