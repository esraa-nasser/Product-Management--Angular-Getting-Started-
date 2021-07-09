import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core'
@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    constructor(){
        this.starWidth=25;
    }
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.starWidth = this.rating * 75 / 5;
    }
    @Input() rating:number=4;
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string>=new EventEmitter<string>();
    onClick():void{
        this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
    }
}