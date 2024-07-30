import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetingsNavbarComponent } from './setings-navbar.component';

describe('SetingsNavbarComponent', () => {
  let component: SetingsNavbarComponent;
  let fixture: ComponentFixture<SetingsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetingsNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetingsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
