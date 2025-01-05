import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrawberryPieComponent } from './strawberry-pie.component';

describe('StrawberryPieComponent', () => {
  let component: StrawberryPieComponent;
  let fixture: ComponentFixture<StrawberryPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrawberryPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrawberryPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
