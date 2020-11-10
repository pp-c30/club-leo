import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetalleObraComponent } from './admin-detalle-obra.component';

describe('AdminDetalleObraComponent', () => {
  let component: AdminDetalleObraComponent;
  let fixture: ComponentFixture<AdminDetalleObraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetalleObraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetalleObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
