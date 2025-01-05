import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasApplePieComponent } from './christmas-apple-pie.component';

describe('ChristmasApplePieComponent', () => {
  let component: ChristmasApplePieComponent;
  let fixture: ComponentFixture<ChristmasApplePieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChristmasApplePieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChristmasApplePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
