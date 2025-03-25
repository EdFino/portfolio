import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleProjectComponent } from './single-project/single-project.component';

export const routes: Routes = [
    {path: 'project/:id', component: SingleProjectComponent},
    {path: 'project', component : ProjectListComponent},
    {path: '', component: LandingPageComponent}
];
