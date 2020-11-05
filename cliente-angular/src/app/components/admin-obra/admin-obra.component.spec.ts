import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObraComponent } from './admin-obra.component';

describe('AdminObraComponent', () => {
  let component: AdminObraComponent;
  let fixture: ComponentFixture<AdminObraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminObraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
