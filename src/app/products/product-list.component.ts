import { Component, OnInit} from "@angular/core";
import { IProduct } from "../shared/product";
import { ProductService } from "./product.service";

@Component({
	selector:'product-list',
	templateUrl:'./product-list.component.html',
	styles:['.panel-primary > .panel-heading {padding:2px 12px}','thead>tr>th{color:#337ab7}']
})
export class ProductListComponent implements OnInit{
	

	

	pageTitle:string='Product List';
	showImage:boolean=true;
	listFilter:string="";
	clickedRating:number;
	products:IProduct[]=[];
	constructor(private productService:ProductService) {
		
	}

	ngOnInit(): void {
		
	this.productService.getProducts().subscribe(response=>{
		this.products=response
	},(error):void=>console.log("error loading"));
	}

	
	
	
	

	toggleImage(){

		this.showImage = !this.showImage;
	}

	notifyStarRating(event:number):void{

		this.clickedRating=event;
	}
}