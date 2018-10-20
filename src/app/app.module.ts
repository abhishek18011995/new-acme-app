import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ErrorComponent } from './shared/error.component';
import { ProductDetailGuardService } from './products/product-detail-guard.sevice';
import { ProductModule } from './products/product.module';
// import { StarRatingComponent } from './shared/star-rating.component';



@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ProductModule, RouterModule.forRoot([

    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }

  ], { useHash: true })],
  declarations: [AppComponent, WelcomeComponent,  ErrorComponent],
  bootstrap: [AppComponent],
  providers: [ProductService, ProductDetailGuardService]
})
export class AppModule { }
