import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class = 'navbar navbar-expand navbar-light bglight'>
    <a class = 'navbar-brand'>{{title}}</a>
    <ul class='nav nav-pills'>
      <li><a routerLinkActive='active' routerLink='/welcome' class ='nav-link'>Home</a></li>
      <li><a routerLinkActive='active' routerLink='/products' class ='nav-link'>Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Acme Product Management';
}
