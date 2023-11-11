import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPortfolioPageComponent } from './my-portfolio-page.component';

describe('MyPortfolioPageComponent', () => {
  let component: MyPortfolioPageComponent;
  let fixture: ComponentFixture<MyPortfolioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPortfolioPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPortfolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
