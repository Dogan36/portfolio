import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceIconsComponent } from './reference-icons.component';

describe('ReferenceIconsComponent', () => {
  let component: ReferenceIconsComponent;
  let fixture: ComponentFixture<ReferenceIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenceIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
