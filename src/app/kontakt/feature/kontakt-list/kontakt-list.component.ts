import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../shared/ui/header/header.component';
import { PageCardComponent } from '../../../shared/ui/page-card/page-card.component';

@Component({
  selector: 'app-kontakt-list',
  imports: [HeaderComponent, PageCardComponent, RouterLink],
  templateUrl: './kontakt-list.component.html',
  styleUrl: './kontakt-list.component.css',
})
export class KontaktListComponent {
  form = signal({ name: '', email: '', message: '' });
  sent = signal(false);

  isValid = computed(() => {
    const f = this.form();
    return f.name.trim() !== '' && f.email.trim() !== '' && f.message.trim() !== '';
  });

  update(field: string, value: string): void {
    this.form.update(f => ({ ...f, [field]: value }));
  }

  submit(): void {
    // TODO: wire to backend / email
    console.log('Kontakt submitted', this.form());
    this.sent.set(true);
    this.form.set({ name: '', email: '', message: '' });
  }
}
