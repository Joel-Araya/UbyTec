import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionPedidosComponent } from './asignacion-pedidos.component';

describe('AsignacionPedidosComponent', () => {
  let component: AsignacionPedidosComponent;
  let fixture: ComponentFixture<AsignacionPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
