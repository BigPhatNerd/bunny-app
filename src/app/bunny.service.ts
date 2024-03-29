import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Bunny } from './bunny';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BunnyService {
  public bunnies: Bunny[] = [];

  constructor(public http: HttpClient) {}

  addBunny(bunny: Bunny) {
    const savedData = {
      name: bunny.name,
      gender: bunny.gender,
      breed: bunny.breed,
      weight: bunny.weight,
      age: bunny.age,
    };
    //this is an observable
    return this.http.post('http://localhost:3000/bunny', savedData)
  }

  // getBunnies() returns an Observable of an array of Bunny objects.
  getBunnies(): Observable<Bunny[]> {
    return this.http
      .get<Bunny[]>('http://localhost:3000/bunnies')
      .pipe(tap((data) => console.log(data)));
  }
}
