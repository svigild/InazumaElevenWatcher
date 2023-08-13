import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InazumaOuterComponent } from './inazuma-outer.component';

describe('InazumaOuterComponent', () => {
  let component: InazumaOuterComponent;
  let fixture: ComponentFixture<InazumaOuterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InazumaOuterComponent]
    });
    fixture = TestBed.createComponent(InazumaOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
