import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienessomosPublicoComponent } from './quienessomos-publico.component';

describe('QuienessomosPublicoComponent', () => {
  let component: QuienessomosPublicoComponent;
  let fixture: ComponentFixture<QuienessomosPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienessomosPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienessomosPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
