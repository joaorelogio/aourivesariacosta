import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {

  jsonSrc = 'assets/location.json';

  constructor(
    private http: HttpClient
  ) { }

  getLocation() {
    return this.http.get<Location>(this.jsonSrc);
  }

}
