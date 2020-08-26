import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LordpostqueryPage } from './lordpostquery.page';

describe('LordpostqueryPage', () => {
  let component: LordpostqueryPage;
  let fixture: ComponentFixture<LordpostqueryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LordpostqueryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LordpostqueryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
