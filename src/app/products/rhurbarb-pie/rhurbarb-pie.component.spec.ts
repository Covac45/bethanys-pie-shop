import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhurbarbPieComponent } from './rhurbarb-pie.component';

describe('RhurbarbPieComponent', () => {
  let component: RhurbarbPieComponent;
  let fixture: ComponentFixture<RhurbarbPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RhurbarbPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhurbarbPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
