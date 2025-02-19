import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitpiesComponent } from './fruitpies.component';
import { RouterModule } from '@angular/router';

describe('FruitpiesComponent', () => {
  let component: FruitpiesComponent;
  let fixture: ComponentFixture<FruitpiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitpiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitpiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
