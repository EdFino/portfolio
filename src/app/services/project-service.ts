import { Injectable } from "@angular/core";
import { Project } from "../models/project";
import { SnapType } from "../models/project-type.type";

@Injectable ({
    providedIn: 'root'
})

export class ProjectsService {
    private projects : Project[] = [
                new Project (
                'Premier site',
                'La première de mes créations',
                'https://wallpaperaccess.com/full/1393718.jpg',
                new Date(),
                14
            ),
    
            new Project (
                'Second site',
                'Entraînement très simple sur html/css',
                'https://wallpaperaccess.com/full/1393740.jpg',
                new Date(),
                2
            ).withLocation('Github'),
            new Project (
                'Harmonistere',
                'Mon chef d\'oeuvre',
                'https://cdn.mos.cms.futurecdn.net/YdFsXZgsagfMECEWk7qRTQ.jpg',
                new Date(),
                56
            )
        ];

        getProjects(): Project[] {
            return [...this.projects];
        }

        getProjectById(projectId: string): Project {
            const foundProject : Project | undefined = this.projects.find(project => project.id === projectId);
            if (!foundProject) {
                throw new Error ('Projct not found');
            }
                return foundProject;
        }

        projectById(projectId: string, snapType : SnapType): void {
            const project : Project | undefined = this.getProjectById(projectId);
            project.snap(snapType);
        }
}