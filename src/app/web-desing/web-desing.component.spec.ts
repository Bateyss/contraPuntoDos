import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesingComponent } from './web-desing.component';

describe('WebDesingComponent', () => {
  let component: WebDesingComponent;
  let fixture: ComponentFixture<WebDesingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDesingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
