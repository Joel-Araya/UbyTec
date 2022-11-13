import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVistaAfiliadoComponent } from './menu-vista-afiliado.component';

describe('MenuVistaAfiliadoComponent', () => {
  let component: MenuVistaAfiliadoComponent;
  let fixture: ComponentFixture<MenuVistaAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVistaAfiliadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuVistaAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
