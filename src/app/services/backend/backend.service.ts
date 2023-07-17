import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PlayerStat} from "../../app.model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  uploadPlayerStats(data: PlayerStat) {
    this.httpClient.post('https://taboo-game-public-d7baf-default-rtdb.europe-west1.firebasedatabase.app/trackings.json', data)
      .subscribe((response) => {
        console.log(response);
      }
    )
  }

  getPlayerStats() {
    return this.httpClient.get('https://taboo-game-public-d7baf-default-rtdb.europe-west1.firebasedatabase.app/trackings.json')
      .pipe(map((response: {[key: string]: PlayerStat}) => {
        const data = [];
        for(const key in response) {
          if(response.hasOwnProperty(key)) {
            data.push({...response[key], id: key})
          }
        }
        return data;
      }));
  }
}
