import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueberryCheesecakeComponent } from './blueberry-cheesecake.component';

describe('BlueberryCheesecakeComponent', () => {
  let component: BlueberryCheesecakeComponent;
  let fixture: ComponentFixture<BlueberryCheesecakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueberryCheesecakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueberryCheesecakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
