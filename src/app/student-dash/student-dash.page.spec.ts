import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentDashPage } from './student-dash.page';

describe('StudentDashPage', () => {
  let component: StudentDashPage;
  let fixture: ComponentFixture<StudentDashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentDashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
