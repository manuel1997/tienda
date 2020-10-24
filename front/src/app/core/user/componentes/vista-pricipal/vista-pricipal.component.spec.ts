import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPricipalComponent } from './vista-pricipal.component';

describe('VistaPricipalComponent', () => {
  let component: VistaPricipalComponent;
  let fixture: ComponentFixture<VistaPricipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPricipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPricipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
