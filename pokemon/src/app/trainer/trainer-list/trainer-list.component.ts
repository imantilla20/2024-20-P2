import { Component, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { dataTrainers } from '../dataTrainers';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<Trainer> = [];
  selected: Boolean = false;
  selectedTrainer!: Trainer;
  trainerDetail!: Trainer;


  constructor(
    private trainerService: TrainerService,
    private router :Router
  ) {}

  getTrainersList(){
    this.trainerService.getTrainers().subscribe((data) => {
    this.trainers = data})}


  ngOnInit() {
    this.getTrainersList();
  }

  onSelected(trainer: Trainer) {
    this.selected = true;
    this.selectedTrainer = trainer;
    this.router.navigate(['/trainers', trainer.id]);
  }
}
