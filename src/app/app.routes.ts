import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component'; 
import { MainComponent } from './main/main.component'; 
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes: Routes = [
  { path: '', redirectTo:"/login", pathMatch:"full"},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent },
  { path: 'main', component: MainComponent },
  { path: 'carrinho', component: CarrinhoComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
