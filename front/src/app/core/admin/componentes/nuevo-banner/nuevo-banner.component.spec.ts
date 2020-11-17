import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoBannerComponent } from './nuevo-banner.component';

describe('NuevoBannerComponent', () => {
  let component: NuevoBannerComponent;
  let fixture: ComponentFixture<NuevoBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
