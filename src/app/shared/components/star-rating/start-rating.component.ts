import { Component, Input, OnChanges, SimpleChanges } from "@angular/core"

@Component({
  selector:'app-star-rating',
  templateUrl:'./start-rating.component.html',
  styleUrls:['./start-rating.component.css']
})

export class StarRatingComponent implements OnChanges{
  public starWidth: number=0;

  @Input()
  public rating: number=0;

  ngOnChanges(){
    this.starWidth=this.rating *16;
  }

}
