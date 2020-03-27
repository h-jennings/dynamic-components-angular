import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneIconComponent } from './plane-icon.component';

describe('PlaneIconComponent', () => {
  let component: PlaneIconComponent;
  let fixture: ComponentFixture<PlaneIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
