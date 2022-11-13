import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComercioAfiliadoComponent } from './admin-comercio-afiliado.component';

describe('AdminComercioAfiliadoComponent', () => {
  let component: AdminComercioAfiliadoComponent;
  let fixture: ComponentFixture<AdminComercioAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComercioAfiliadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComercioAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
