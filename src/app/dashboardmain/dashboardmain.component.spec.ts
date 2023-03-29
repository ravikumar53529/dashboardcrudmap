import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmainComponent } from './dashboardmain.component';

describe('DashboardmainComponent', () => {
  let component: DashboardmainComponent;
  let fixture: ComponentFixture<DashboardmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
