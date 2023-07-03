import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cours_app';
  personnes=[
    {
      nom:"fall",
      prenom:"salem",
      age:18,
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ducimus aperiam magnam nemo esse vel animi, tempore dolores, libero explicabo culpa necessitatibus veritatis incidunt id, sit natus facere veniam odit."
    },
    {
      nom:"diop",
      prenom:"moussa",
      age:23,
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ducimus aperiam magnam nemo esse vel animi, tempore dolores, libero explicabo culpa necessitatibus veritatis incidunt id, sit natus facere veniam odit."

    },
    {
      nom:"gueye",
      prenom:"moactar",
      age:30,
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ducimus aperiam magnam nemo esse vel animi, tempore dolores, libero explicabo culpa necessitatibus veritatis incidunt id, sit natus facere veniam odit."
    },
    {
      nom:"diallo",
      prenom:"moumahed",
      age:23,
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ducimus aperiam magnam nemo esse vel animi, tempore dolores, libero explicabo culpa necessitatibus veritatis incidunt id, sit natus facere veniam odit."

    },
    {
      nom:"amar",
      prenom:"moumahed",
      age:27,
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ducimus aperiam magnam nemo esse vel animi, tempore dolores, libero explicabo culpa necessitatibus veritatis incidunt id, sit natus facere veniam odit."

    },
    {
      nom:"amar",
      prenom:"moumahed",
      age:27,
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur ducimus aperiam magnam nemo esse vel animi, tempore dolores, libero explicabo culpa necessitatibus veritatis incidunt id, sit natus facere veniam odit."

    }
  ];
  valide=true;
}
