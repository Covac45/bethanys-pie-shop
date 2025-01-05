import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpiesComponent } from './allpies.component';

describe('AllpiesComponent', () => {
  let component: AllpiesComponent;
  let fixture: ComponentFixture<AllpiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllpiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
