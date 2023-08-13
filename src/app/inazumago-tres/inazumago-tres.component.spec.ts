import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InazumagoTresComponent } from './inazumago-tres.component';

describe('InazumagoTresComponent', () => {
  let component: InazumagoTresComponent;
  let fixture: ComponentFixture<InazumagoTresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InazumagoTresComponent]
    });
    fixture = TestBed.createComponent(InazumagoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
