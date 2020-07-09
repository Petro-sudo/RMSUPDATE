import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoppropPage } from './popprop.page';

describe('PoppropPage', () => {
  let component: PoppropPage;
  let fixture: ComponentFixture<PoppropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoppropPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoppropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
