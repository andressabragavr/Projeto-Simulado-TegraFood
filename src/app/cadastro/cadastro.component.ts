import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  constructor(private router: Router) {}

  routingMain() {
    this.router.navigate(['main']);
  }

  routingLogin() {
    this.router.navigate(['login']);
  }
}
