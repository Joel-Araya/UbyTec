import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVistaAdminComponent } from './menu-vista-admin.component';

describe('MenuVistaAdminComponent', () => {
  let component: MenuVistaAdminComponent;
  let fixture: ComponentFixture<MenuVistaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVistaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuVistaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
