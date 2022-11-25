import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAfiliacionVistaAfiliadoComponent } from './admin-afiliacion-vista-afiliado.component';

describe('AdminAfiliacionVistaAfiliadoComponent', () => {
  let component: AdminAfiliacionVistaAfiliadoComponent;
  let fixture: ComponentFixture<AdminAfiliacionVistaAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAfiliacionVistaAfiliadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAfiliacionVistaAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
