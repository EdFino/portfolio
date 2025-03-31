import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mystack',
  imports: [CommonModule],
  templateUrl: './mystack.component.html',
  styleUrl: './mystack.component.scss'
})
export class MystackComponent {
    stacks = [
            { image: '/assets/images/logos/react-logo.png', title: 'React', type: 'principal', category: 'front' },
            { image: '/assets/images/logos/javascript-logo.png', title: 'JavaScript', type: 'principal', category: 'front' },
            { image: '/assets/images/logos/angular-logo.png', title: 'Angular', type: 'secondary', category: 'front' },
            { image: '/assets/images/logos/typescript-logo.png', title: 'TypeScript', type: 'secondary', category: 'front' },
            { image: '/assets/images/logos/tailwind-logo.png', title: 'Tailwind CSS', type: 'secondary', category: 'front' },
            { image: '/assets/images/logos/php-logo.png', title: 'PHP', type: 'principal', category: 'back' },
            { image: '/assets/images/logos/nodejs-logo.png', title: 'Node.js', type: 'principal', category: 'back' },
            { image: '/assets/images/logos/symfony-logo.png', title: 'Symfony', type: 'secondary', category: 'back' },
            { image: '/assets/images/logos/mysql-logo.png', title: 'MySQL', type: 'principal', category: 'database' },
            { image: '/assets/images/logos/mongodb-logo.png', title: 'MongoDB', type: 'principal', category: 'database' }
    ];
    getFilteredStacks(type: string, category: string) {
        return this.stacks.filter(stack => stack.type === type && stack.category === category);
      }
}
