import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAfiliacionesComponent } from './admin-afiliaciones.component';

describe('AdminAfiliacionesComponent', () => {
  let component: AdminAfiliacionesComponent;
  let fixture: ComponentFixture<AdminAfiliacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAfiliacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAfiliacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
