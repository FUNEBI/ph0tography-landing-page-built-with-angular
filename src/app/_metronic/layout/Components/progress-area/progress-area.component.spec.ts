import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressAreaComponent } from './progress-area.component';

describe('ProgressAreaComponent', () => {
  let component: ProgressAreaComponent;
  let fixture: ComponentFixture<ProgressAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
