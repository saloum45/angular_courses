import { Component } from '@angular/core';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.css']
})
export class SaisieComponent {
  afficher() {
    alert('bien vu '+this.champs_nom+" "+this.champs_prenom)
    this.champs_nom="vide";
    this.champs_prenom="vide"
    alert('bien vu '+this.champs_nom+" "+this.champs_prenom)
  }
  public champs_nom="";
  public champs_prenom="";

}
