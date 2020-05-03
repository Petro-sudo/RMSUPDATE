import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopaddPage } from './popadd.page';

describe('PopaddPage', () => {
  let component: PopaddPage;
  let fixture: ComponentFixture<PopaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
