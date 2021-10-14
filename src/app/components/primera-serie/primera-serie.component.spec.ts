import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraSerieComponent } from './primera-serie.component';

describe('PrimeraSerieComponent', () => {
  let component: PrimeraSerieComponent;
  let fixture: ComponentFixture<PrimeraSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeraSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
