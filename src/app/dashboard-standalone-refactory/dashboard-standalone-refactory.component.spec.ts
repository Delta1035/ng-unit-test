import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStandaloneRefactoryComponent } from './dashboard-standalone-refactory.component';

describe('DashboardStandaloneRefactoryComponent', () => {
  let component: DashboardStandaloneRefactoryComponent;
  let fixture: ComponentFixture<DashboardStandaloneRefactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardStandaloneRefactoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardStandaloneRefactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
