import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerTopicDetailsComponent } from './career-topic-details.component';

describe('CareerTopicDetailsComponent', () => {
  let component: CareerTopicDetailsComponent;
  let fixture: ComponentFixture<CareerTopicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerTopicDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerTopicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
