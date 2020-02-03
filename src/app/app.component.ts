import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera } from './Models/Camera';
import { Photo } from './Models/Photo';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NASA';
  sent_data: Number;
  show_cards: Boolean = false;
  image;

  sol_value: Number = 1000;
  camera_value: String = 'CHEMCAM';

  public responseFromChild = [];
  camera_names = [];
  count = 1;

  cards_list: Photo[] = [];

  camera__names_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/?api_key=DEMO_KEY';
  photos_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + this.sol_value + '&camera=' + this.camera_value + '&api_key=DEMO_KEY';

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getCameraNamesFromAPI();

  }



  getCameraNamesFromAPI() {


    this.http.get(this.camera__names_URL).subscribe(x => {
      const listOfNames: Camera[] = [...[x['rover']['cameras']][0]];
      for (const name of listOfNames) {
        this.camera_names = [...this.camera_names, name];

      }
    });
  }

  async getDataFromChild($event) {
    this.responseFromChild = [...$event]



    this.cards_list = [];
    for (const r of this.responseFromChild) {

      await this.getPhotosFromAPI(this.sol_value, r.name);
    }


    setTimeout(() => {
      this.show_cards = true;
    }, 0);


  }

  async getPhotosFromAPI(sol: Number, camera: String) {



    this.sol_value = sol;
    this.camera_value = camera;
    this.photos_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + this.sol_value + '&camera=' + this.camera_value + '&api_key=DEMO_KEY';

    await this.http.get(this.photos_URL).subscribe((response) => {


      const photos_list: Photo[] = response['photos'];

      setTimeout(() => {

        this.cards_list = [...this.cards_list, photos_list[0]];
      }, 3000);


    });


  }



}



