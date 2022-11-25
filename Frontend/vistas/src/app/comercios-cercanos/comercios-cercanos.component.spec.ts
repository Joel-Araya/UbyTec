import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComerciosCercanosComponent } from './comercios-cercanos.component';

describe('ComerciosCercanosComponent', () => {
  let component: ComerciosCercanosComponent;
  let fixture: ComponentFixture<ComerciosCercanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComerciosCercanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComerciosCercanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
