import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudORlordPage } from './stud-orlord.page';

describe('StudORlordPage', () => {
  let component: StudORlordPage;
  let fixture: ComponentFixture<StudORlordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudORlordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudORlordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
