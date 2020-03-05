import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResproofPage } from './resproof.page';

describe('ResproofPage', () => {
  let component: ResproofPage;
  let fixture: ComponentFixture<ResproofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResproofPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResproofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
