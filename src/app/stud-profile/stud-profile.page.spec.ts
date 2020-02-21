import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudProfilePage } from './stud-profile.page';

describe('StudProfilePage', () => {
  let component: StudProfilePage;
  let fixture: ComponentFixture<StudProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
