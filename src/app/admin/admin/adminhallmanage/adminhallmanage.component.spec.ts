import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhallmanageComponent } from './adminhallmanage.component';

describe('AdminhallmanageComponent', () => {
  let component: AdminhallmanageComponent;
  let fixture: ComponentFixture<AdminhallmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminhallmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminhallmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
