import { Component, Input, OnChanges, Output} from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector:'star-rating',
    templateUrl:'./star-rating.component.html',
    styles:['.crop {overflow: hidden;}', 'div {cursor: pointer;}']
})

export class StarRatingComponent implements OnChanges{
  

@Input() starRating:number;
@Output() notify:EventEmitter<number>=new EventEmitter<number>();
starWidth:number=17;
constructor(){

}


ngOnChanges(): void {

    this.starWidth=this.starRating*86/5;
}

onClick(starRating:number):void{

    this.notify.emit(starRating);
}

}
