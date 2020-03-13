import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandlordDashPage } from './landlord-dash.page';

describe('LandlordDashPage', () => {
  let component: LandlordDashPage;
  let fixture: ComponentFixture<LandlordDashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordDashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandlordDashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
