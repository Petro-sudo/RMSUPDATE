import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LordpostissuesPage } from './lordpostissues.page';

describe('LordpostissuesPage', () => {
  let component: LordpostissuesPage;
  let fixture: ComponentFixture<LordpostissuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LordpostissuesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LordpostissuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
