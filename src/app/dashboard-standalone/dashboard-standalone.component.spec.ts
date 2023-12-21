import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStandaloneComponent } from './dashboard-standalone.component';

describe('DashboardStandaloneComponent', () => {
  let component: DashboardStandaloneComponent;
  let fixture: ComponentFixture<DashboardStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardStandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
