import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ProjectsService } from '../services/project-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-project',
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    UpperCasePipe,
    DatePipe,
    RouterLink,

  ],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent implements OnInit {

    project! : Project;

    snapButtonText!: string;
    snapOrNotSnap!: boolean;

    constructor (private projectService: ProjectsService,
                private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.snapButtonText = "Oh snap";
        this.snapOrNotSnap = true;

        const projectID = this.route.snapshot.params['id'];
        this.project = this.projectService.getProjectById(projectID);
    }

    onChangeSnap() :void {
        if (this.snapOrNotSnap) {
            this.snap();
        } else {
            this.unSnap();
        }

    }

    snap() :void {
        this.projectService.projectById(this.project.id, 'snap');
        this.snapOrNotSnap = false;
        this.snapButtonText = "Oh unsnap";
    }

    unSnap() :void {
        this.projectService.projectById(this.project.id, 'unsnap');
        this.snapOrNotSnap = true;
        this.snapButtonText = "Oh snap";
    }
}
