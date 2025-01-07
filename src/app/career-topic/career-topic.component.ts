import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Skill } from '../data/Skill';

@Component({
  selector: 'app-career-topic',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './career-topic.component.html',
  styleUrl: './career-topic.component.scss'
})
export class CareerTopicComponent {
  @Input() skill!: Skill | any;

}
