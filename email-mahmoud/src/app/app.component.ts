import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  emailvett: Email[] = [];
  Invia(email: HTMLInputElement, oggetto: HTMLInputElement, testo: HTMLInputElement): boolean {
    console.log(email.value, oggetto.value, testo.value)
    this.emailvett.push(new Email (email.value, oggetto.value, testo.value));
  return false;
  }
}
