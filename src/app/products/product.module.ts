import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductFilter } from '../shared/product-filter.pipe';
import { StarRatingComponent } from '../shared/star-rating.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailGuardService } from './product-detail-guard.sevice';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, FormsModule,
        RouterModule.forChild([

            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', canActivate: [ProductDetailGuardService], component: ProductDetailsComponent }
        ])],
    exports:[StarRatingComponent],
    declarations: [ProductListComponent, ConvertToSpacesPipe, ProductFilter, StarRatingComponent, ProductDetailsComponent]
})
export class ProductModule { }