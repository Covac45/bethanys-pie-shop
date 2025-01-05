import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CranberryPieComponent } from './cranberry-pie.component';

describe('CranberryPieComponent', () => {
  let component: CranberryPieComponent;
  let fixture: ComponentFixture<CranberryPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CranberryPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CranberryPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
