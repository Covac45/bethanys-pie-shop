import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeachPieComponent } from './peach-pie.component';

describe('PeachPieComponent', () => {
  let component: PeachPieComponent;
  let fixture: ComponentFixture<PeachPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeachPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeachPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
