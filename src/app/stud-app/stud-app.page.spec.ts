import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudAppPage } from './stud-app.page';

describe('StudAppPage', () => {
  let component: StudAppPage;
  let fixture: ComponentFixture<StudAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
