import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudregisterPage } from './studregister.page';

describe('StudregisterPage', () => {
  let component: StudregisterPage;
  let fixture: ComponentFixture<StudregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
