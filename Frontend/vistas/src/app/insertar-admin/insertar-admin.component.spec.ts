import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarAdminComponent } from './insertar-admin.component';

describe('InsertarAdminComponent', () => {
  let component: InsertarAdminComponent;
  let fixture: ComponentFixture<InsertarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
