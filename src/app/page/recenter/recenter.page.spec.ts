import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenterPage } from './recenter.page';

describe('RecenterPage', () => {
  let component: RecenterPage;
  let fixture: ComponentFixture<RecenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecenterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
