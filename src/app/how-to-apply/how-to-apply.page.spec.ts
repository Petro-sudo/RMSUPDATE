import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowToApplyPage } from './how-to-apply.page';

describe('HowToApplyPage', () => {
  let component: HowToApplyPage;
  let fixture: ComponentFixture<HowToApplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToApplyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowToApplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
