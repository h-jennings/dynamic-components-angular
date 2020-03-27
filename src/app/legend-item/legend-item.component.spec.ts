import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendItemComponent } from './legend-item.component';

describe('LegendItemComponent', () => {
  let component: LegendItemComponent;
  let fixture: ComponentFixture<LegendItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
