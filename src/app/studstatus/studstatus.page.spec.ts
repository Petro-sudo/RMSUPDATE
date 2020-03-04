import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudstatusPage } from './studstatus.page';

describe('StudstatusPage', () => {
  let component: StudstatusPage;
  let fixture: ComponentFixture<StudstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudstatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
