import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
  <nav class='navbar navbar-default'>
  <div class='container-fluid'>
      <a class='navbar-brand'></a>
      <ul class='nav navbar-nav'>
          <li><a [routerLink]="['/welcome']">Home</a></li>
          <li><a [routerLink]="['/products']">Product List</a></li>
      </ul>
  </div>
</nav>
 <!-- <h1>Acme Product Management</h1>-->
 <!--<product-list ></product-list>-->
 <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent  {

  
 
 }
