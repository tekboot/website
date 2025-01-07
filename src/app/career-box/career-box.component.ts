import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Job } from '../data/Job';


@Component({
  selector: 'app-career-box',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './career-box.component.html',
  styleUrl: './career-box.component.scss'

})
export class CareerBoxComponent {
  @Input() job!: Job;


}

