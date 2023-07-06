import { Component, OnInit } from '@angular/core';
import { Ihot} from './Ihotels';
import { HotelsServices } from './hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit{
  hotels:Ihot[]=[]

  private filtre="mot";

  public filteredHotel:Ihot[]=[];

  public receiveRating!: String;
  constructor(private hotelsService:HotelsServices){

  }

  ngOnInit(): void {
    this.hotels=this.hotelsService.getHotels();
    this.filteredHotel=this.hotels;
  }

  public get doFilter():string{
    return this.filtre;
  }

  public set doFilter(mot:string){
    this.filtre=mot;
    this.filteredHotel=(this.doFilter) ?this.filtrer(this.filtre):this.hotels;
  }

  private filtrer(critere:string):Ihot[]{
    critere=critere.toLocaleLowerCase();
    const filtrage=this.hotels.filter(
      (hotel :Ihot)=>hotel.nom.toLocaleLowerCase().indexOf(critere)!=-1
    );
    return filtrage;
  }

  // private rechercher(critete:string):Ihot[]{


  // }
  public receiveRatingclicked(message:string):void{
    this.receiveRating=message;
  }
}
