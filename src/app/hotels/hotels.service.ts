import { Injectable } from "@angular/core";
import { Ihot } from "./Ihotels";



@Injectable({
  providedIn:'root'
})
export class HotelsServices {

  public getHotels():Ihot[]{
    return [
      {
        img:"assets/1.jpg",
        nom:"Radisson Hotel ",
        avis:"Les 5 étoiles sont pour le service qui est extraordinaire. J'y ai séjourné avec ma compagnie aérienne provisoirement du 4 au 6 juin et j'ai reçu un des meilleurs services en 9 ans à voyager et séjourner partout dans le monde. Un grand merci spécialement à Henri, Alain, Al Hadji, Abdoulay et tous les autres qui étaient présents. Vous avez rendu notre séjour exceptionnel! J'y retournerai juste pour les revoir :)",
        prix:18103,
        rating:2

      },
      {
        img:"assets/2.jpg",
        nom:"HOTEL DES ALMADIES",
        avis:"Bien placé très agréable,C'est trop souhaite,Une si belle plage...,L'attente est trop longue,ACCEUILLANTS ET TRAVAILLEURS,Espace convivial,Clean hotel. Room is small and windows can not be open.,Good hotel @ centre of city",
        prix:48761,
        rating:2.5
      },
      {
        img:"assets/3.jpg",
        nom:"Hotel La Voile d'Or",
        avis:"Jolie plage, mais avec vue sur la Zone portuaire !Par contre en ce qui concerne l'hôtel il ne faut pas y séjourner:la douche est froide, le personnel irrespectueux, le restaurant est cher pour la ",
        prix:45546,
        rating:3.5
      },
      {
        img:"assets/4.jpg",
        nom:"Axil Hôtel",
        avis:"Un très bon hôtel à Dakar. Les chambres sont bien aménagées, la nourriture est de qualité, le WiFi fonctionne bien. Le personnel est à l'écoute. Je serais ravi d'y loger à nouveau,Un endroit au cœur de Dakar, très accessible à partir de la ville. Les locaux sont bien et le service que ce soit l'accueil, la restauration à la sécurité sont de qualité",
        prix:11000,
        rating:1

      },{
        img:"assets/5.jpg",
        nom:"Chez Salim Lac Rose",
        avis:"Dans le cadre de notre circuit organisé, nous devions dormir dans cette hôtel. Suite événements indépendants à l'hôtelier nous n'avons finalement pas dormi sur place cependant, le personnel nous a merveilleusement accueilli, nous a proposé ",
        prix:70546,
        rating:4.5
      },
      {
        img:"assets/6.jpg",
        nom:"Hôtels abdou Diouf",
        avis:"Tres calme ,pas cher ,service agréable, grand chambre, bon petit déjeuner vraiment à visiter pres du centre ville et plage ,hôtel, restaurant proximité de l'embarcadere pour la visite de l'île de goree Chambres3,0 Service4,0 Emplacement4,0 Points forts de l'hôtelCalme · Adapté aux enfants · Bon rapport qualité-prix SécuritéBien Accessibilité piétonneBien",
        prix:21125,
        rating:3
      }
    ];
  }
}
