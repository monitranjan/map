import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaypointPage } from './waypoint.page';

describe('WaypointPage', () => {
  let component: WaypointPage;
  let fixture: ComponentFixture<WaypointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaypointPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaypointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
