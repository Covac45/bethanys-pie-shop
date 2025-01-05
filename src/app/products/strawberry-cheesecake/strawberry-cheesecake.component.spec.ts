import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrawberryCheesecakeComponent } from './strawberry-cheesecake.component';

describe('StrawberryCheesecakeComponent', () => {
  let component: StrawberryCheesecakeComponent;
  let fixture: ComponentFixture<StrawberryCheesecakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrawberryCheesecakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrawberryCheesecakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
