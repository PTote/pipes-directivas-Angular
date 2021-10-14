import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceraSerieComponent } from './tercera-serie.component';

describe('TerceraSerieComponent', () => {
  let component: TerceraSerieComponent;
  let fixture: ComponentFixture<TerceraSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceraSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceraSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
