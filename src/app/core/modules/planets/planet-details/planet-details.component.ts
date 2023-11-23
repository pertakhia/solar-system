import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css'],
})
export class PlanetDetailsComponent implements OnInit {
  public planetId: number = 0;
  public destryed$: Subject<void> = new Subject<void>();
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destryed$)).subscribe((params) => {
      console.log(params);
      this.planetId = params['id'];
    });
  }
}
