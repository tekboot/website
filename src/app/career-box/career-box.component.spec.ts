import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerBoxComponent } from './career-box.component';

describe('CareerBoxComponent', () => {
  let component: CareerBoxComponent;
  let fixture: ComponentFixture<CareerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
