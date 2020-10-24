import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductoComponent } from './admin-producto.component';

describe('AdminProductoComponent', () => {
  let component: AdminProductoComponent;
  let fixture: ComponentFixture<AdminProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
