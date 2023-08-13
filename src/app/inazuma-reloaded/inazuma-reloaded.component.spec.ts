import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InazumaReloadedComponent } from './inazuma-reloaded.component';

describe('InazumaReloadedComponent', () => {
  let component: InazumaReloadedComponent;
  let fixture: ComponentFixture<InazumaReloadedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InazumaReloadedComponent]
    });
    fixture = TestBed.createComponent(InazumaReloadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
