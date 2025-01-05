import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalpiesComponent } from './seasonalpies.component';

describe('SeasonalpiesComponent', () => {
  let component: SeasonalpiesComponent;
  let fixture: ComponentFixture<SeasonalpiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonalpiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalpiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
