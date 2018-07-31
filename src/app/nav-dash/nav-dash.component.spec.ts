
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavDashComponent } from './nav-dash.component';

describe('NavDashComponent', () => {
  let component: NavDashComponent;
  let fixture: ComponentFixture<NavDashComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
