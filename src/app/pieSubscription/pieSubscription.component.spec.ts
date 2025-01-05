import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieSubscriptionComponent } from './pieSubscription.component';

describe('PieSubscriptionComponent', () => {
  let component: PieSubscriptionComponent;
  let fixture: ComponentFixture<PieSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
