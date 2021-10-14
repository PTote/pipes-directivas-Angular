import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoPipeHT3Component } from './segundo-pipe-ht3.component';

describe('SegundoPipeHT3Component', () => {
  let component: SegundoPipeHT3Component;
  let fixture: ComponentFixture<SegundoPipeHT3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoPipeHT3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoPipeHT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
