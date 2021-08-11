import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clientes = [];

  constructor() {

  }

  ngOnInit() {

    // Realice la petición al URL http://localhost:3001/clientes
    // Guarde el resultado en el atributo clientes
    
  }
}
