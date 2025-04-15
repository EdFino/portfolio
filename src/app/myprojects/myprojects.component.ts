import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '../services/theme-service';

@Component({
  selector: 'app-myprojects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.scss'
})
export class MyprojectsComponent {

    constructor(private themeService: ThemeService) {}

    myProjectsDefaultText: string = `Voici un rapide tour d'horizon des projets les plus importants pour moi. Etant encore junior, cette section est encore modeste mais je m'applique à améliorer les projets existants ou à travailler sur de nouveaux que je vous présenterais bientôt ! Je suis très content du code que je déploie en ce moment, qui monte en qualité. Il est mieux factorisé, mieux commenté et plus performant. Je m'emploie aussi à une veille technologique hebdomadaire pour rester au courant des dernières technologies que je tente ensuite d'intégrer dans mes applications.`

    myProjectsDefaultTitle: string = "Cliquez sur un projet !";

    projectDescriptions: { idDescription: number; titleDescription: string; technologiesDescription: string[]; summaryDescription: string; }[] = [
        { idDescription: 1,
            titleDescription: 'Harmonistère',
            technologiesDescription: ['react-logo', 'nodejs-logo', 'mongodb-logo'],
            summaryDescription: `Harmonistère est une application pour le jeu de rôle éponyme qui sortira bientôt. Si le site est toujours en construction, il reste mon plus grand accomplissement en tant qu développeur. Fait sous React et Node.js, bientôt déployé, on peut déjà s'y inscrire, créer des fiches de personnages, les modifier à l\'envie, les supprimer, créer des sessions de jeu avec chatbox intégrée.

            Avec l'aide d'une graphiste et du client, de nouvelles fonctionnalités sortiront dans les jours à venir, comme :

    - Plusieurs outils pour jouer à Harmonisère avec sa fiche grâce à la gestion de ressources et de blessures.
    - La gestion d'amis et consultation de leurs fiches.
    - Les fonctions attendues pour jouer ensemble à Harmonisère dans l'instance de jeu.`
        },
        { idDescription: 2,
            titleDescription: 'Le Quai Antique',
            technologiesDescription: ['html-logo', 'php-logo', 'mysql-logo'],
            summaryDescription: `Le Quai Antique est mon premier projet demandé par ma plateforme de formation Studi. Il a été réalisé en à peine deux mois, une période éreintante mais qui m'a fait énormément progressé, bien que le résultat final soit digne d'une première tentative.
            
            On retrouve quand même un front en HTML, CSS et JavaScript, tout en responsive design, avec de nombreuses communications à une base de données MySQL, qui permettait de prendre des rendez-vous pour réserver une table ou encore accéder à un panneau administrateur pour modifier les horaires.`
        },
        { idDescription: 3,
            titleDescription: 'Autres projets',
            technologiesDescription: ['javascript-logo', 'angular-logo', 'python-logo'],
            summaryDescription: `Est-ce tout ? Non ! Vous pouvez bien sûr rajouter ce portfolio sous vos yeux créé avec Angular. Je suis très loin d'utiliser tout le potentiel du framework mais c'est un aperçu avant que je ne m'attaque à un plus gros projet. J'ai aussi créé le site d'une association à Créteil mais la commande a été annulée à la moitié du projet et je préfère ne pas montrer le résultat.
            
            Je ne peux pas non plus dévoiler ce que j'ai produit avec l'équipe de CodAlly durant mon stage de presque un an chez eux, comme nous travaillions pour un ministère québecois, mais je peux au moins dire que j'y ai fait beaucoup de front-end, notamment JavaScript et qu'il m'est arrivé de toucher à du Python (sous Flask) de temps en temps pour y produire quelques fonctions ou effectuer des branchements avec mon design.
            
            Quant à mes futurs projets, je suis déjà dessus : je prévois d'une part de réaliser ma première vraie mission free-lance pour une entreprise belge, de commencer une fois le site Harmonisère assez avancé, une version mobile sous react-native, et enfin de développer pour m'entraîner avec React et Symfony, un site de co-voiturage !`
        }
    ];

    currentTitle: string = this.myProjectsDefaultTitle;
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
        const whatIsTheme = this.themeService.isDarkMode() ? 'dark-theme' : 'light-theme';
        return `/assets/images/logos/${whatIsTheme}/${technology}.png`;
    };
}
