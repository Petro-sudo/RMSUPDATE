import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplynowPage } from './applynow.page';

describe('ApplynowPage', () => {
  let component: ApplynowPage;
  let fixture: ComponentFixture<ApplynowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplynowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplynowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
