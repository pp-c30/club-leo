import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionPublicoComponent } from './donacion-publico.component';

describe('DonacionPublicoComponent', () => {
  let component: DonacionPublicoComponent;
  let fixture: ComponentFixture<DonacionPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonacionPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
