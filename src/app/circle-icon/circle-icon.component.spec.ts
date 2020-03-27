import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleIconComponent } from './circle-icon.component';

describe('CircleIconComponent', () => {
  let component: CircleIconComponent;
  let fixture: ComponentFixture<CircleIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
