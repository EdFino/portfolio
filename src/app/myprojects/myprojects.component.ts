import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.scss'
})
export class MyprojectsComponent {

    myProjectsDefaultText: string = 'Voici un rapide tour d\'horizon des projets les plus importants pour moi. Etant encore junior, cette section est encore modeste mais je m\'applique à améliorer les projets existants ou à travailler sur de nouveaux que je vous présenterais bientôt ! Je suis très content du code que je déploie en ce moment, qui monte en qualité. Il est mieux factorisé, mieux commenté et plus performant. Je m\'emploie aussi à une veille technologique hebdomadaire pour rester au courant des dernières technologies que je tente ensuite d\'intégrer dans mes applications.'

    projectDescriptions: { idDescription: number; titleDescription: string; technologiesDescription: string[]; summaryDescription: string; }[] = [
        { idDescription: 1,
            titleDescription: 'Harmonistère',
            technologiesDescription: ['react-logo', 'node-js-logo', 'mongodb-logo'],
            summaryDescription: 'Harmonistère est une application pour le jeu de rôle éponyme qui sortira bientôt.'
        },
        { idDescription: 2,
            titleDescription: 'Le Quai Antique',
            technologiesDescription: ['html-logo', 'php-logo', 'mysql-logo'],
            summaryDescription: 'Le Quai Antique est mon premier projet demandé par Studi. Il a été réalisé en deux mois.'
        },
        { idDescription: 3,
            titleDescription: 'Autres projets',
            technologiesDescription: ['javascript-logo', 'angular-logo', 'python-logo'],
            summaryDescription: 'Est-ce tout ? Non ! Vous pouvez bien sûr rajouter ce portfolio créé avec Angular. Je suis très loin d\'utiliser tout le potentiel du framework mais c\'est un aperçu avant que je ne m\'ttaque à un plus gros projet.'
        }
    ];

    currentTitle: string = '';
    currentTechnologies: string[] = [];
    currentSummary: string = this.myProjectsDefaultText;

    updateDescription (projectID: number): void {
        const project = this.projectDescriptions.find(p => p.idDescription ===projectID);
        if (project) {
            this.currentTitle = project.titleDescription;
            this.currentTechnologies = project.technologiesDescription;
            this.currentSummary = project.summaryDescription;
        } else {
            this.currentTitle = '';
            this.currentTechnologies = [];
            this.currentSummary = this.myProjectsDefaultText;
        }
    }

    getTechnologiesImage(technology: string): string {
        return `/assets/images/logos/${technology}.png`;
    };
}
