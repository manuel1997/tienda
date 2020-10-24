import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNabvarComponent } from './admin-nabvar.component';

describe('AdminNabvarComponent', () => {
  let component: AdminNabvarComponent;
  let fixture: ComponentFixture<AdminNabvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNabvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNabvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
