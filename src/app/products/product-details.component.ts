import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "./product.service";
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../shared/product';


@Component({
    templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {

    product: IProduct;

    constructor(private routeParams: ActivatedRoute, private productService: ProductService, private router:Router) {
    }

    ngOnInit(): void {

        let id = +this.routeParams.snapshot.paramMap.get('id');
        this.productService.getProducts().subscribe(products => {

            this.product = products.find(product => product.productId == id)
        });
    }

    // notifyStarRating(starRating:number){


    // }
    public onBack(){

        this.router.navigate(['/products']);
    }

}