import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheesecakesComponent } from './cheesecakes.component';

describe('CheesecakesComponent', () => {
  let component: CheesecakesComponent;
  let fixture: ComponentFixture<CheesecakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheesecakesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheesecakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
