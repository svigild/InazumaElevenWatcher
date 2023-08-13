import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InazumaAresComponent } from './inazuma-ares.component';

describe('InazumaAresComponent', () => {
  let component: InazumaAresComponent;
  let fixture: ComponentFixture<InazumaAresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InazumaAresComponent]
    });
    fixture = TestBed.createComponent(InazumaAresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
