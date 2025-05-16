import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Trainer } from './Trainer';

@Injectable({
  providedIn: 'root'
})

export class TrainerService {
private url = environment.baseUrl;
private urlEntrenadores = environment.baseUrl + 'trainers.json';

constructor(private http: HttpClient) {}

getTrainers() {
  return this.http.get<Trainer[]>(this.urlEntrenadores);
}
getTrainerById(id: number) {
  return this.http.get<Trainer>(this.url+id+'/trainers.json');}
}
