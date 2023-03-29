import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultdashboardComponent } from './defaultdashboard.component';

describe('DefaultdashboardComponent', () => {
  let component: DefaultdashboardComponent;
  let fixture: ComponentFixture<DefaultdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
