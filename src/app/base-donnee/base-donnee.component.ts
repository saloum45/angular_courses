import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-donnee',
  templateUrl: './base-donnee.component.html',
  styleUrls: ['./base-donnee.component.css']
})
export class BaseDonneeComponent implements OnInit{
  private readonly HTTP_API_URL='/api/hotels.json';
  private readonly HTTP_API_URL2='https://localhost/topcas/';
  public getJsonValue:any;
  public postJsonValue:any;

  constructor(private http:HttpClient) {

  }
  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod(){
    this.http.get(this.HTTP_API_URL2).subscribe((donne)=>{
      console.log(donne);
      this.getJsonValue=donne;
    })
  }
}
