import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarRechazarSolicitudComponent } from './aceptar-rechazar-solicitud.component';

describe('AceptarRechazarSolicitudComponent', () => {
  let component: AceptarRechazarSolicitudComponent;
  let fixture: ComponentFixture<AceptarRechazarSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceptarRechazarSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceptarRechazarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
