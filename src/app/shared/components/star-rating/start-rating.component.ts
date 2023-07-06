import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core"

@Component({
  selector:'app-star-rating',
  templateUrl:'./start-rating.component.html',
  styleUrls:['./start-rating.component.css']
})

export class StarRatingComponent implements OnChanges{
  public starWidth: number=0;

  @Input()
  public rating: number=0;
  @Output()
  public starRatingClick:EventEmitter<string>=new EventEmitter<string>();

  ngOnChanges(){
    this.starWidth=this.rating *16;
  }

  public sendRating():void{
    this.starRatingClick.emit(`la note est de ${this.rating} étoiles`);
  }
}
