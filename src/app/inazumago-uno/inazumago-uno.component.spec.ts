import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InazumagoUnoComponent } from './inazumago-uno.component';

describe('InazumagoUnoComponent', () => {
  let component: InazumagoUnoComponent;
  let fixture: ComponentFixture<InazumagoUnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InazumagoUnoComponent]
    });
    fixture = TestBed.createComponent(InazumagoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
