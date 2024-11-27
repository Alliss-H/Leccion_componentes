import { Component, OnInit } from '@angular/core';

interface Componente { 
  icon: string; 
  name: string; 
  redirectTo: string; 
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [ 
    { 
      icon: 'heart', 
      name: 'Ion-Button', 
      redirectTo: '/ion-button' 
    }, 
    {
      icon: 'logo-apple', 
      name: 'Ion-Avatar', 
      redirectTo: '/ion-avatar' 
    }, 
  ]; 
 
  constructor() { } 
 
  ngOnInit() { 
  } 
 
} 