import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme-service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-contactform',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TranslateModule],
    templateUrl: './contactform.component.html',
    styleUrls: ['./contactform.component.scss']
})

export class ContactFormComponent {
    contactForm: FormGroup<{
        name: FormControl<string>;
        email: FormControl<string>;
        message: FormControl<string>;
    }>;

    constructor(private fb: FormBuilder, 
                private themeService: ThemeService) {
        this.contactForm = new FormGroup({
            name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
            email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
            message: new FormControl('', { nonNullable: true, validators: [Validators.required] })
        });
    }

    onSubmit() {
        if (this.contactForm.valid) {
            const formData = this.contactForm.value;
            window.location.href = `mailto:seibeledouard@yahoo.fr?subject=Contact depuis le Portfolio&body=Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
        }
    }

    whatIsTheme(filename: string): string {
        const theme = this.themeService.isDarkMode() ? 'dark-theme' : 'light-theme';
        return `assets/images/logos/${theme}/${filename}`;
    }
}
