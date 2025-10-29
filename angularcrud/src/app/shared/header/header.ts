import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  exibirLogo: boolean = true;

  itensMenu = [
    {label: 'Home', link:''},
    {label: 'Cadastro', link:'/pessoas/incluir'},
    {label: 'Login', link:'/pessoas/login'},
    {label: 'Sobre', link:'/pessoas/sobre'},
    {label: 'Ajuda', link:'/pessoas/ajuda'},
  ];
}
