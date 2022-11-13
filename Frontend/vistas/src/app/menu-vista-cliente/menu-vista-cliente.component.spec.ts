import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVistaClienteComponent } from './menu-vista-cliente.component';

describe('MenuVistaClienteComponent', () => {
  let component: MenuVistaClienteComponent;
  let fixture: ComponentFixture<MenuVistaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVistaClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuVistaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
