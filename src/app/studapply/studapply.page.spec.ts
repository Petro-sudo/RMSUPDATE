import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudapplyPage } from './studapply.page';

describe('StudapplyPage', () => {
  let component: StudapplyPage;
  let fixture: ComponentFixture<StudapplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudapplyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudapplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
