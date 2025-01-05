import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryPieComponent } from './cherry-pie.component';

describe('CherryPieComponent', () => {
  let component: CherryPieComponent;
  let fixture: ComponentFixture<CherryPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CherryPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CherryPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
