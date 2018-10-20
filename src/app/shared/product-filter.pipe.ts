import { Pipe,PipeTransform } from "@angular/core";
import { IProduct } from "../shared/product";

@Pipe({
    name:'productFilter'
})
export class ProductFilter implements PipeTransform{


    transform(value:IProduct[],listFilter:string):IProduct[]{
listFilter=listFilter.toLowerCase();
        return value.filter((val:IProduct)=>val.productName.toLowerCase().indexOf(listFilter)>-1);
    }
}