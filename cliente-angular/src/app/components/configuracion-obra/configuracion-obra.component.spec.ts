import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionObraComponent } from './configuracion-obra.component';

describe('ConfiguracionObraComponent', () => {
  let component: ConfiguracionObraComponent;
  let fixture: ComponentFixture<ConfiguracionObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionObraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
