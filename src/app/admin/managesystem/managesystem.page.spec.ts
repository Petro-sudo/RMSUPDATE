import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagesystemPage } from './managesystem.page';

describe('ManagesystemPage', () => {
  let component: ManagesystemPage;
  let fixture: ComponentFixture<ManagesystemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesystemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagesystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
