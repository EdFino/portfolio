import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme-service';

@Component({
  selector: 'app-mystack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mystack.component.html',
  styleUrl: './mystack.component.scss'
})
export class MystackComponent implements OnInit {

  whatIsTheme: string = 'light-theme';
  stacks: any[] = [];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.whatIsTheme = this.themeService.isDarkMode() ? 'dark-theme' : 'light-theme';

    this.stacks = [
      { image: `/assets/images/logos/${this.whatIsTheme}/javascript-logo.png`, title: 'JavaScript', type: 'principal', category: 'front' },
      { image: `/assets/images/logos/${this.whatIsTheme}/react-logo.png`, title: 'React', type: 'principal', category: 'front' },
      { image: `/assets/images/logos/${this.whatIsTheme}/angular-logo.png`, title: 'Angular', type: 'secondary', category: 'front' },
      { image: `/assets/images/logos/${this.whatIsTheme}/typescript-logo.png`, title: 'TypeScript', type: 'secondary', category: 'front' },
      { image: `/assets/images/logos/${this.whatIsTheme}/tailwind-logo.png`, title: 'Tailwind CSS', type: 'secondary', category: 'front' },
      { image: `/assets/images/logos/${this.whatIsTheme}/php-logo.png`, title: 'PHP', type: 'principal', category: 'back' },
      { image: `/assets/images/logos/${this.whatIsTheme}/nodejs-logo.png`, title: 'Node.js', type: 'principal', category: 'back' },
      { image: `/assets/images/logos/${this.whatIsTheme}/symfony-logo.png`, title: 'Symfony', type: 'secondary', category: 'back' },
      { image: `/assets/images/logos/${this.whatIsTheme}/mysql-logo.png`, title: 'MySQL', type: 'principal', category: 'database' },
      { image: `/assets/images/logos/${this.whatIsTheme}/mongodb-logo.png`, title: 'MongoDB', type: 'principal', category: 'database' }
    ];
  }

  getFilteredStacks(type: string, category: string) {
    return this.stacks.filter(stack => stack.type === type && stack.category === category);
  }
}
