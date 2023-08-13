import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InazumaTresComponent } from './inazuma-tres.component';

describe('InazumaTresComponent', () => {
  let component: InazumaTresComponent;
  let fixture: ComponentFixture<InazumaTresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InazumaTresComponent]
    });
    fixture = TestBed.createComponent(InazumaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
