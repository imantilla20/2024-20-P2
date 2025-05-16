import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail!: Trainer;
  trainerId!: number;

  constructor(private route: ActivatedRoute,
    private trainerService: TrainerService,
    private router: Router
  ) {}

  getTrainerById() {
    this.trainerService.getTrainerById(this.trainerId).subscribe((data) => {
    this.trainerDetail = data;
    })
  }

  ngOnInit() {
    if (this.trainerDetail == undefined) {
      this.trainerId = this.route.snapshot.paramMap.get('id')! as unknown as number;
      if(this.trainerId){
        this.getTrainerById();
      }
    }
  }
   getAverageLevel(): number {
  if (!this.trainerDetail?.pokemons || this.trainerDetail.pokemons.length === 0) return 0;

  const total = this.trainerDetail.pokemons.reduce((sum, p) => sum + p.level, 0);
  return total / this.trainerDetail.pokemons.length;
}
goBack(): void {
  this.router.navigate(['/trainers']);
}


}
