import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class ProductDetailGuardService implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        // let id = +route.url[1].path;
        let id = +route.paramMap.get('id');
        if (isNaN(id) || id > 10 || id < 1) {
            console.log('Invalid URL');
            this.router.navigate(['/products']);
            return false;
        }
      

            // console.log(id);
            return true;
      
    }

}