import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriaPrincipalComponent } from './admin-categoria-principal.component';

describe('AdminCategoriaPrincipalComponent', () => {
  let component: AdminCategoriaPrincipalComponent;
  let fixture: ComponentFixture<AdminCategoriaPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategoriaPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoriaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
