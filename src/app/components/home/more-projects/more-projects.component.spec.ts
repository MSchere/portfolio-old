import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoreprojectsComponent } from './more-projects.component';

describe('MoreprojectsComponent', () => {
  let component: MoreprojectsComponent;
  let fixture: ComponentFixture<MoreprojectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
