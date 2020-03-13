import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandloardAppPage } from './landloard-app.page';

describe('LandloardAppPage', () => {
  let component: LandloardAppPage;
  let fixture: ComponentFixture<LandloardAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandloardAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandloardAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
