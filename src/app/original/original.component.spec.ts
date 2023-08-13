import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalComponent } from './original.component';

describe('OriginalComponent', () => {
  let component: OriginalComponent;
  let fixture: ComponentFixture<OriginalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OriginalComponent]
    });
    fixture = TestBed.createComponent(OriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
