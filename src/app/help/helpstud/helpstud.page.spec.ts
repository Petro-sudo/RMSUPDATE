import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpstudPage } from './helpstud.page';

describe('HelpstudPage', () => {
  let component: HelpstudPage;
  let fixture: ComponentFixture<HelpstudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpstudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpstudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
