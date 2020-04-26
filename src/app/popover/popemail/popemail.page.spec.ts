import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopemailPage } from './popemail.page';

describe('PopemailPage', () => {
  let component: PopemailPage;
  let fixture: ComponentFixture<PopemailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopemailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopemailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
