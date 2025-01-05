import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpkinPieComponent } from './pumpkin-pie.component';

describe('PumpkinPieComponent', () => {
  let component: PumpkinPieComponent;
  let fixture: ComponentFixture<PumpkinPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PumpkinPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumpkinPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
