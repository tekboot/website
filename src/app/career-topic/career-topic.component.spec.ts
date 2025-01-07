import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerTopicComponent } from './career-topic.component';

describe('CareerTopicComponent', () => {
  let component: CareerTopicComponent;
  let fixture: ComponentFixture<CareerTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerTopicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
